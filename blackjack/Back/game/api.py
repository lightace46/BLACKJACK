from ninja import Router, ModelSchema, Schema
from game.models import Game, Player
#from django.utils import timezone
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

    
# @router.post("/create_question", response=QuestionSchema)
# def add(request, add_question: AddQuestionSchema):
#     question = Question.objects.create(question_text=add_question.question_text,)

#     for choice in add_question.choices:
#         Choice.objects.create(choice_text=choice, question=question)
#     return question

# @router.get("/question/{question_id}", response=QuestionSchema)
# def get(request, question_id: int):
#      return Question.objects.get(pk=question_id)


@router.post("/start_game", response=GameSchema)
def add(request, new_game: AddGameSchema):
    
    game = Game.objects.create(name=new_game.name,)

    for player in new_game.players:
        Player.objects.create(name=player,game=game)
    return game

@router.get("/get_game/{game_id}",response=GameSchema)
def get(request, game_id: int):
    return Game.objects.get(pk=game_id)