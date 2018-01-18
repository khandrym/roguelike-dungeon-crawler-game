import * as dungeonGate from '../dungeonGate';

export interface DungeonGates {
  [index: string]: dungeonGate.State;
}

export interface State {
  byId: DungeonGates;
  allIds: string[];
}
