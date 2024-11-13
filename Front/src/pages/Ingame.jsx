import { useLocation } from "react-router-dom";
import Table from "../component/Table";
import Row from "../component/Row";



export default function Ingame() {
  const location = useLocation()
  const { filteredPlayerArray, game_name } = location.state;
  console.log(location.state)
  return (
    <>
      <h1>Game name : {game_name}</h1>

      <input list="throw"/>
      <datalist id="throw" >
        <option value="1"/>
        <option value="2"/>
        <option value="3"/>
      </datalist>
      <br/>
      <input type="button" value="throw dice"/>
      <hr/>
      <input type="button" value="pass turn"/>

      <Table players={filteredPlayerArray} />
      {/* <Row players={filteredPlayerArray}/> */}
    </>
  );
}
