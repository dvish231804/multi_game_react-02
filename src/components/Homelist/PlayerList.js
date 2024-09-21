import React, { useEffect } from 'react';
// import './PlayerList.css'; // Add your CSS in a separate file or as inline styles

const PlayerList = () => {
  const players = [
    { id: 1, name: 'John Doe', win: '$1500', profilePic: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', win: '$300', profilePic: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Mike Johnson', win: '$700', profilePic: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Alice Williams', win: '$1200 ', profilePic: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Chris Evans', win: '$500', profilePic: 'https://via.placeholder.com/50' },
    { id: 6, name: 'Natasha Romanoff', win: '$900', profilePic: 'https://via.placeholder.com/50' },
    { id: 7, name: 'Bruce Banner', win: '$1000', profilePic: 'https://via.placeholder.com/50' },
    { id: 8, name: 'Tony Stark', win: '$2500', profilePic: 'https://via.placeholder.com/50' },
    { id: 9, name: 'Steve Rogers', win: '$800', profilePic: 'https://via.placeholder.com/50' },
    { id: 10, name: 'Thor Odinson', win: '$1500 Points', profilePic: 'https://via.placeholder.com/50' }
  ];

  useEffect(() => {
    const scrollContent = document.getElementById('scrollContent');
    const startAutoScroll = () => {
      scrollContent.classList.add('scrolling');

      setInterval(() => {
        scrollContent.classList.remove('scrolling');
        void scrollContent.offsetWidth;
        scrollContent.classList.add('scrolling');
      }, 20000);
    };

    startAutoScroll();
  }, []);

  return (
    <div className="">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h4 className="mb-4  mt-4 text-center">Top 10 - Live Players</h4>
          <div id="playerList" className="bg-light border">
            <ul id="scrollContent" className="list-group">
              {players.map(player => (
                <li key={player.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="player-info">
                    <img src={player.profilePic} alt="Profile" className="profile-pic" />
                    <div>
                      <span className="player-id">ID: {player.id}</span><br />
                      <span className="player-name">Name: {player.name}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="win-icon">&#x1F3C6;</span>
                    <span className="player-win">{player.win}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
