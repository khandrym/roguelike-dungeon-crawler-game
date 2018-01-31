import * as React from 'react';
import Wrapper from '../Wrapper';
import * as title from '../../../title';
import * as map from '../../../map';
import * as info from '../../../info';

export default () => {
  return (
    <Wrapper>
      <title.components.Title />
      <map.components.Map />
      <info.components.Info />
    </Wrapper>
  );
};
