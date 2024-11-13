import Row from "../component/Row";

export default function Table({ players }) {
    console.log(players);
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">score</th>
                    <th scope="col">name</th>
                </tr>
            </thead>
            <tbody>
                <Row players={players} />
            </tbody>
        </table>
    )
}

