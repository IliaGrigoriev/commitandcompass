from fastapi                 import FastAPI, Request
from os.path                 import join
from urllib.parse            import urljoin

import uvicorn
import asyncio
import json

from comms import Communication

app  = FastAPI()
comm = Communication()

from services_enums           import Services
from ml_and_ds.keyword_search import KeyWordEnum

# Root
# ---------------------------------------------------------------------------------------------
@app.get("/")
def read_root():
    return {"message": "Gateway"}

# SMU Status : Endpoint [SMU Service --> Gateway]
# ---------------------------------------------------------------------------------------------
@app.post(comm.add_slashes(KeyWordEnum.SPACY_KW.name))
async def receive_smu_status(request: Request):
    # Access raw JSON data
    message           = await request.json()
    header_plus_input = message
    print("<< header_plus_input >>: ")
    #print(header_plus_input)
    #print(json.dumps(header_plus_input, indent=4))
    print(header_plus_input["operation"]["run_smu"])
    print(header_plus_input["operation"]["identifiers"])

# SMU Status : Endpoint [SMU Service --> Gateway]
# ---------------------------------------------------------------------------------------------
@app.post(comm.add_slashes(KeyWordEnum.BERT_KW.name))
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
        host = comm.get_service_configs(Services.ML_DS.value)["ip"],  # Specify the IP
        port = comm.get_service_configs(Services.ML_DS.value)["port"] # Specify the PORT
    )