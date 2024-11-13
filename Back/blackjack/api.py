from ninja import NinjaAPI
from game.api import router as game_api

api = NinjaAPI()

api.add_router("/game",game_api)