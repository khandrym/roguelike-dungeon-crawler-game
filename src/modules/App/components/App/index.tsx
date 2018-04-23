import * as React from 'react';
import Wrapper from '../Wrapper';
import * as Title from '../../../Title';
import * as Map from '../../../Map';
import * as Info from '../../../Info';

export default () => {
  return (
    <Wrapper>
      <Title.components.Title />
      <Map.components.Map />
      <Info.components.Info />
    </Wrapper>
  );
};
