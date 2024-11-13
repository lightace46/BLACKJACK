import { useNavigate } from "react-router-dom";
import useCreateGame from "../hooks/useCreateGame";
import Input from "../component/Input";
import { useEffect, useState } from "react";

export default function Logins() {
  const navigate = useNavigate();
  const { createGame } = useCreateGame();

  const [game_name, setGame_name] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  const handleCreateGame = () => {
    const playersArray = [player1, player2, player3, player4];
    const filteredPlayerArray = playersArray.filter((elm) => elm);
    console.log(filteredPlayerArray);

    if (filteredPlayerArray == "") {
      return console.log("pas bien");
    } else {
      createGame(filteredPlayerArray, game_name);
      navigate("/Ingame", { state: { filteredPlayerArray, game_name}} );
    }
  };

  return (
    <>
      <h1>Blackjack</h1>
      <h2>Create Game</h2>
      <Input
        name="game_name"
        type="text"
        placeholder="Game name"
        value={game_name}
        onChange={(value) => setGame_name(value)}
      />
      <br />
      <br />
      <Input
        name="player1"
        type="text"
        placeholder="player 1"
        value={player1}
        onChange={(value) => setPlayer1(value)}
      />
      <br />
      <Input
        name="player2"
        type="text"
        placeholder="player 2"
        value={player2}
        onChange={(value) => setPlayer2(value)}
      />
      <br />
      <Input
        name="player3"
        type="text"
        placeholder="player 3"
        value={player3}
        onChange={(value) => setPlayer3(value)}
      />
      <br />
      <Input
        name="player4"
        type="text"
        placeholder="player 4"
        value={player4}
        onChange={(value) => setPlayer4(value)}
      />
      <br />
      <button onClick={handleCreateGame}>Play</button>
    </>
  );
}
