import { State } from '../dungeons/model';
import * as dungeon from './dungeon';

export const all: State = {
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
