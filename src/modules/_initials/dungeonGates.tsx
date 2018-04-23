import { State } from '../_dungeonGates';
import * as dungeonGate from './dungeonGate';

const dungeonGates: State = {
  byId: {
    [dungeonGate.gate1.id]: dungeonGate.gate1,
    [dungeonGate.gate2.id]: dungeonGate.gate2
  },
  allIds: [
    dungeonGate.gate1.id,
    dungeonGate.gate2.id
  ]
};

export default dungeonGates;
