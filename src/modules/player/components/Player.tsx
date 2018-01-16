import * as React from 'react';
import Wrapper from './Wrapper';
import PlayerName from './PlayerName';
import PlayerHealth from './PlayerHealth';
import PlayerLevel from './PlayerLevel';
import PlayerExperience from './PlayerExperience';
import PlayerLocation from './PlayerLocation';
import PlayerWeapon from './PlayerWeapon';
import './Player.css';

export default () => {
  return (
    <Wrapper>
      <PlayerName />
      <PlayerHealth />
      <PlayerLevel />
      <PlayerExperience />
      <PlayerWeapon />
      <PlayerLocation />
    </Wrapper>
  );
};
