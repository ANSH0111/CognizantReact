const players = [
  { name: 'Shubman Gill', score: 83 },
  { name: 'Rohit Sharma', score: 87 },
  { name: 'Virat Kohli', score: 90 },
  { name: 'Temba Bavuma', score: 45 },
  { name: 'Hardik Pandya', score: 38 },
  { name: 'Kane Williamson', score: 50 },
  { name: 'Ravindra Jadeja', score: 30 },
  { name: 'Jasprit Bumrah', score: 12 },
  { name: 'Trent Boult', score: 18 },
  { name: 'Mitchell Starc', score: 40 },
  { name: 'Josh Hazlewood', score: 15 }
];

const ListofPlayers = () => (
  <div>
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h2>List of Players having Scores less than 70 </h2>
      <ul>
        {players.filter(player => player.score <70).map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ListofPlayers;