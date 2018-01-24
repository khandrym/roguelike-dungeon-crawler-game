import * as dungeonGate from '../dungeonGate';

export const NAME = 'dungeonGates';

export interface DungeonGates {
  [index: string]: dungeonGate.State;
}

export interface State {
  byId: DungeonGates;
  allIds: string[];
}
