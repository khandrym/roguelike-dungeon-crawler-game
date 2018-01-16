import * as React from 'react';
import Wrapper from './Wrapper';
import Name from './Name';
import Health from './Health';
import Level from './Level';
import Experience from './Experience';
import Location from './Location';
import Weapon from './Weapon';
import './Player.css';

export default () => {
  return (
    <Wrapper>
      <Name />
      <Health />
      <Level />
      <Experience />
      <Weapon />
      <Location />
    </Wrapper>
  );
};
