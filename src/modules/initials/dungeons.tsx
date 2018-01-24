import * as dungeons from '../dungeons';
import * as dungeon from './dungeon';

export const all: dungeons.State = {
  byId: {
    [dungeon.gray.id]: dungeon.gray,
    [dungeon.durk.id]: dungeon.durk,
    [dungeon.black.id]: dungeon.black
  },
  allIds: [
    dungeon.gray.id,
    dungeon.durk.id,
    dungeon.black.id
  ]
};
