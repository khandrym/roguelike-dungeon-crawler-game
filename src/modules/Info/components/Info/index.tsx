import * as React from 'react';
import Wrapper from '../Wrapper';
import * as Player from '../../../Player';
import * as NeighborItem from '../../../NeighborItem';

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
