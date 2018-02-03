import * as React from 'react';
import Wrapper from '../Wrapper';
import * as player from '../../../player';
import * as neighbourItem from '../../../neighbourItem';

export default () => {
  return (
    <Wrapper>
      <player.containers.Player />
      <neighbourItem.containers.NeighbourItem getNeighbourItem={neighbourItem.getNeighbourItemAtTop} />
      <neighbourItem.containers.NeighbourItem getNeighbourItem={neighbourItem.getNeighbourItemAtBottom} />
      <neighbourItem.containers.NeighbourItem getNeighbourItem={neighbourItem.getNeighbourItemAtRight} />
      <neighbourItem.containers.NeighbourItem getNeighbourItem={neighbourItem.getNeighbourItemAtLeft} />
    </Wrapper>
  );
};
