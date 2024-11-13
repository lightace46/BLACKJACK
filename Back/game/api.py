from ninja import Router, ModelSchema, Schema
from game.models import Game, Player
from game.services import create_game

router = Router()

class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = ["id","name","score"]

class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = ["id","name","turn","ended"]

    players: list[PlayerSchema]

class AddGameSchema(Schema):
    name: str
    players: list[str]


@router.post("/start_game", response=GameSchema)
def add(request, new_game: AddGameSchema):
    
    game = Game.objects.create(name=new_game.name,)

    for player in new_game.players:
        Player.objects.create(name=player,game=game)
    return game

@router.get("/get_game/{game_id}",response=GameSchema)
def get(request, game_id: int):
    return Game.objects.get(pk=game_id)