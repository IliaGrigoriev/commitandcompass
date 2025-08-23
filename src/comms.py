from httpx   import AsyncClient
from fastapi import WebSocket

import yaml

class Communication:

    # Constructor
    def __init__(self):
        with open("services_config.yaml", "r") as f:
            self.service_configs = yaml.safe_load(f)

    # Send with AsyncClient
    # ---------------------------------------------------------------------------
    async def send(self, full_address_and_call, json_message):
        print(full_address_and_call)
        async with AsyncClient(timeout=30.0) as client: # TODO ---> what to do if the Matlab component processing is taking too much time, constant pings?
            response = await client.post(
                                    full_address_and_call, 
                                    json = json_message
                                )
            return response
        
    # Send with WebSocket
    # ---------------------------------------------------------------------------
    async def send_websocket(self, json_data, ws_url):
        websocket = WebSocket()
        #await websocket.send_json(json_data)  # Send the lamp states

        # WebSocket-specific logic
        #ws_url = 'ws://127.0.0.1:8000/ws/lamp-states'  # Replace with your actual WebSocket URL # TODO: Update address here!
        async with websocket.connect(ws_url):
            await websocket.send_json(json_data) # Send the data as a JSON string

    # Add slashes
    # ----------------------------------------------------------------------------
    def add_slashes(string):
        # Ensure the string is not empty
        if not string:
            return "/"
        # Add '/' at both ends
        return f"/{string.strip('/')}/"
    
    # Get speficic service configs
    # ----------------------------------------------------------------------------
    def get_service_configs(self, name):
        return self.service_configs["services"][name]