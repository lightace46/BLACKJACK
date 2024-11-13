import useCreateGame from "../hooks/useCreateGame";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  const { createGame } = useCreateGame();
  const handleCreateGame = () => {
    createGame()
    navigate("/tonton")
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleCreateGame} >Play</button>
    </>
  );
}
