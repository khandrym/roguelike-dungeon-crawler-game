import { State } from './model';
import * as dungeonGate from '../dungeonGate';

export const dungeonGates: State = {
  byId: {
    [dungeonGate.initials.gate1.id]: dungeonGate.initials.gate1,
    [dungeonGate.initials.gate2.id]: dungeonGate.initials.gate2
  },
  allIds: [
    dungeonGate.initials.gate1.id,
    dungeonGate.initials.gate2.id
  ]
};
