import { State } from '../dungeons/model';
import * as dungeon from './dungeon';

const dungeons: State = {
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

export default dungeons;
