import { State } from '../_dungeons';
import * as dungeon from './dungeon';

const dungeons: State = {
  byId: {
    [dungeon.gray.id]: dungeon.gray,
    [dungeon.dark.id]: dungeon.dark,
    [dungeon.black.id]: dungeon.black
  },
  allIds: [
    dungeon.gray.id,
    dungeon.dark.id,
    dungeon.black.id
  ]
};

export default dungeons;
