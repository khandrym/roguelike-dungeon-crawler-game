import { State } from '../dungeonGates/model';
import * as dungeonGate from './dungeonGate';

export const all: State = {
  byId: {
    [dungeonGate.gate1.id]: dungeonGate.gate1,
    [dungeonGate.gate2.id]: dungeonGate.gate2
  },
  allIds: [
    dungeonGate.gate1.id,
    dungeonGate.gate2.id
  ]
};
