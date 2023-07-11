import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="player-profile-container">
      <div className="player-card">
        <div className="player-avatar">
          <img src="/path/to/player-avatar.jpg" alt="Player Avatar" />
        </div>
        <div className="player-info">
          <h2 className="player-name">Player Name</h2>
          <p className="player-position">Position: Forward</p>
          <p className="player-area">Area: City, Country</p>
          <p className="player-email">Email: player@example.com</p>
          <p className="player-contact">Contact: 1234567890</p>
          <p className="player-info">Age: 25</p>
          <p className="player-info">Nationality: Country</p>
          <p className="player-info">Height: 180 cm</p>
          <p className="player-info">Weight: 70 kg</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
