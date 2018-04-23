import * as React from 'react';
import Wrapper from '../Wrapper';
import * as Player from '../../../_player';
import * as NeighborItem from '../../../_neighborItem';

export default () => {
  return (
    <Wrapper>
      <Player.containers.Player />
      <NeighborItem.containers.NeighborItem getNeighborItem={NeighborItem.getNeighborItemAtTop} />
      <NeighborItem.containers.NeighborItem getNeighborItem={NeighborItem.getNeighborItemAtBottom} />
      <NeighborItem.containers.NeighborItem getNeighborItem={NeighborItem.getNeighborItemAtRight} />
      <NeighborItem.containers.NeighborItem getNeighborItem={NeighborItem.getNeighborItemAtLeft} />
    </Wrapper>
  );
};
