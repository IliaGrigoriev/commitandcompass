from fastapi                 import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses       import StreamingResponse
from os.path                 import join
from urllib.parse            import urljoin

import uvicorn
import asyncio
import json

from comms          import Communication
from services_enums import Services

app        = FastAPI()
comm       = Communication()

lamp_states = {
    "ANA_ST_MAT_HOLLOW_SH"       : False,
    "ANA_ST_MAT_HOUSING"         : False,
    "CALC_SYS_DEFORMATION"       : False,
    "CALC_BEAR_PRESS_CON_RS"     : False,
    "CALC_BEAR_PRESS_CON_GS"     : False,
    "CALC_PACK_MAIN_BEAR_ASSEMB" : False,
    "CALC_COST_MAIN_BEAR_ASSEMB" : False,
    "DEFORMATION"                : False,
    "BEARING_PRESSURE"           : False,
    "PACKAGE"                    : False,
    "COST"                       : False
}

header_plus_input = {
    "source": '',      
    "target": '',
    "operation": {
        "run_smu": {
          "scope":    '',
          "purpose":  '',
          "fidelity": ''
        }, 
        'identifiers': []
    },
    'data': []
  }; 

# Root
# ---------------------------------------------------------------------------------------------
@app.get("/")
def read_root():
    return {"message": "Gateway"}

# Configure CORS
# TODO: for dev only! not safe for prod! For prod you need to init params diff-y!
app.add_middleware(
    CORSMiddleware,
    allow_origins     = [ip_addresses.get_full_address(REACT_IME_IP, REACT_IME_PORT)], # Allow React app's origin
    allow_credentials = True,  # Allow cookies and credentials (if needed)
    allow_methods     = ["*"], # Allow all HTTP methods (GET, POST, etc.)
    allow_headers     = ["*"], # Allow all request headers
)

# SSE Endpoint for Lamp States
# ---------------------------------------------------------------------------------------------
@app.get("/smu-visual-states/")
async def lamp_states_stream():
    async def event_stream():
        while True:
            yield f"data: {json.dumps(header_plus_input)}\n\n"
            await asyncio.sleep(1)  # Send updates every second

    return StreamingResponse(event_stream(), media_type="text/event-stream")

# Run Workflow : Endpoint [React GUI --> Gateway]
# ---------------------------------------------------------------------------------------------
@app.post(ip_addresses.add_slashes(CALL_RUN_SPF))
async def run_psf(request: Request):
    message     = await request.body()        # Get the raw request body
    message_str = message.decode("utf-8")     # Decode bytes to string
    #print(f"Received message: {message_str}") # Print the string
    
    #print(" ========================= ")

    message_dict = json.loads(message_str)    # Convert JSON string to dict
    #print(f"Parsed dict: {message_dict}")

    full_address = ip_addresses.get_full_address(IME_MAT_SERVICE_IP, IME_MAT_SERVICE_PORT)
    full_address_and_call = urljoin(full_address + '/', CALL_START_SMU_SERVICE + '/')

    submit_smu = SubmitSMU()

    #my_json = {'smu_state': StateSMU.HOLLOW_SHAFT_BUTTON.value}
    target = submit_smu.submit(message_dict)
    if target == 'smu_service':
       await comm.send(full_address_and_call, message_dict) #my_json)
    else:
       print("Target unknown!")   

# SMU Status : Endpoint [SMU Service --> Gateway]
# ---------------------------------------------------------------------------------------------
@app.post(ip_addresses.add_slashes(CALL_UPDATE_SMU_STATUS))
async def receive_smu_status(request: Request):
    
    # Access raw JSON data
    message           = await request.json()
    header_plus_input = message
    print("<< header_plus_input >>: ")
    #print(header_plus_input)
    #print(json.dumps(header_plus_input, indent=4))
    print(header_plus_input["operation"]["run_smu"])
    print(header_plus_input["operation"]["identifiers"])

# Main
# ---------------------------------------------------------------------------------------------
if __name__ == "__main__":
    # Start Uvicorn server programmatically
    uvicorn.run(
        app,
        host = comm.get_service_configs(Services.GATEWAY.name)["ip"],  # Specify the IP
        port = comm.get_service_configs(Services.GATEWAY.name)["port"] # Specify the PORT
    )