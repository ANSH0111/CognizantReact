const t20Players = ['Rohit Sharma', 'Virat Kohli', 'Jasprit Bumrah'];
const RanjiTrophyPlayers = ['Ayush Mhatre', 'Prithvi Shaw', 'Ajinkya Rahane', 'Shreyas Iyer'];
const combinedPlayers = [...t20Players, ...RanjiTrophyPlayers];

const IndianPlayers = () => {
    return (
        <div>
            <h2>Odd Players</h2>
            <ul>
                {combinedPlayers.filter((player, index) => index % 2 !== 0).map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
            <h2>Even Players</h2>
            <ul>
                {combinedPlayers.filter((player, index) => index % 2 === 0).map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
            <h2>List of Indian Players merged</h2>
            <ul>
                {combinedPlayers.map((player, index) => (
                    <li key={index}>
                        {player}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;