import * as React from 'react';
import Wrapper from '../Wrapper';
import * as player from '../../../player';
import * as dungeonItem from '../../../dungeonItem';
import * as location from '../../../location';

function isVisibleAtTop(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x &&
    playerLocation.y === itemLocation.y + 1);
}

function isVisibleAtBottom(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x &&
    playerLocation.y === itemLocation.y - 1);
}

function isVisibleAtRight(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x + 1 &&
    playerLocation.y === itemLocation.y);
}

function isVisibleAtLeft(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x - 1 &&
    playerLocation.y === itemLocation.y);
}

export default () => {
  return (
    <Wrapper>
      <player.containers.Player />
      <dungeonItem.containers.DungeonItem isVisible={isVisibleAtTop} />
      <dungeonItem.containers.DungeonItem isVisible={isVisibleAtBottom} />
      <dungeonItem.containers.DungeonItem isVisible={isVisibleAtRight} />
      <dungeonItem.containers.DungeonItem isVisible={isVisibleAtLeft} />
    </Wrapper>
  );
};
