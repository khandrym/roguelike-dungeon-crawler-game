import * as React from 'react';
import * as item from '../../item';
import PlayerName from './PlayerName';
import PlayerHealth from './PlayerHealth';
import PlayerLevel from './PlayerLevel';
import PlayerExperience from './PlayerExperience';
import PlayerLocation from './PlayerLocation';
import PlayerWeapon from './PlayerWeapon';
import './Player.css';

export default () => {
  return (
    <item.components.Item>
      <div className="Player">
        <PlayerName />
        <PlayerHealth />
        <PlayerLevel />
        <PlayerExperience />
        <PlayerWeapon />
        <PlayerLocation />
      </div>
    </item.components.Item>
  );
};
