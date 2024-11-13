export default function useCreateGame() {
  const createGame = (players, game_name) => {
    fetch("http://127.0.0.1:8000/api/game/start_game", {
      method: "POST",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: game_name,
        players: players
      }),
    })
    .then((response) => {
        return response.json();        
    }).then((response)=> {
        console.log(response);
    }).catch((reason)=>{
        console.error(reason);
    });
  };
  return { createGame };
}
