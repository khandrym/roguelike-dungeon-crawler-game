import * as React from 'react';
import Wrapper from '../Wrapper';
import * as player from '../../../player';
import * as neighborItem from '../../../neighborItem';

export default () => {
  return (
    <Wrapper>
      <player.containers.Player />
      <neighborItem.containers.NeighborItem getNeighborItem={neighborItem.getNeighborItemAtTop} />
      <neighborItem.containers.NeighborItem getNeighborItem={neighborItem.getNeighborItemAtBottom} />
      <neighborItem.containers.NeighborItem getNeighborItem={neighborItem.getNeighborItemAtRight} />
      <neighborItem.containers.NeighborItem getNeighborItem={neighborItem.getNeighborItemAtLeft} />
    </Wrapper>
  );
};
