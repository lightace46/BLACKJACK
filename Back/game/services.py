from game.models import Game, Player

def create_game(game_name: str, players: list[str]):
    game = Game.objects.create(name=game_name)
    
    for name in players:
        Player.objects.create(name=name, players=players)

def get_player(game_id):
    game = Game.objects.get(pk=game_id)
    players = game.players.all()
    return players

def get_winners(players_id: int, score: int):
    pass

def change_score(player_id: int, score: int):
    player = Player.objects.get(pk=player_id)
    player.score = score
    player.save
    return