import PropTypes from 'prop-types';

export default function Row({ players }) {
    return (
        <>
            {players.map(player => (
                <tr key={player.id}>
                    <td>{player.id}</td>
                    <td>{player.score}</td>
                    <td>{player.name}</td>
                </tr>
            ))}
        </>
    )
}

// Add PropTypes validation
Row.propTypes = {
    players: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            score: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};