import * as dungeonGates from '../dungeonGates';
import * as dungeonGate from './dungeonGate';

export const all: dungeonGates.State = {
  byId: {
    [dungeonGate.gate1.id]: dungeonGate.gate1,
    [dungeonGate.gate2.id]: dungeonGate.gate2
  },
  allIds: [
    dungeonGate.gate1.id,
    dungeonGate.gate2.id
  ]
};
