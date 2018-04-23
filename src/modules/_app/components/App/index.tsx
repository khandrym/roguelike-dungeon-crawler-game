import * as React from 'react';
import Wrapper from '../Wrapper';
import * as Title from '../../../_title';
import * as Map from '../../../_map';
import * as Info from '../../../_info';

export default () => {
  return (
    <Wrapper>
      <Title.components.Title />
      <Map.components.Map />
      <Info.components.Info />
    </Wrapper>
  );
};
