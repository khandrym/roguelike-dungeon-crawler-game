import { State } from './model';
import * as dungeon from '../dungeon';

export const dungeons: State = {
  byId: {
    [dungeon.initials.gray.id]: dungeon.initials.gray,
    [dungeon.initials.durk.id]: dungeon.initials.durk,
    [dungeon.initials.black.id]: dungeon.initials.black
  },
  allIds: [
    dungeon.initials.gray.id,
    dungeon.initials.durk.id,
    dungeon.initials.black.id
  ]
};
