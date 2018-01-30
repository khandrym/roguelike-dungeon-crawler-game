import * as React from 'react';
import Wrapper from './Wrapper';
import Name from '../containers/Name';
import Health from '../containers/Health';
import Experience from '../containers/Experience';
import Location from '../containers/Location';
import Weapon from '../containers/Weapon';

export default () => {
  return (
    <Wrapper>
      <Name />
      <Health />
      <Experience />
      <Weapon />
      <Location />
    </Wrapper>
  );
};
