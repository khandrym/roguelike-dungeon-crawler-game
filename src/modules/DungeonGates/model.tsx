import * as DungeonGate from '../DungeonGate';

export const NAME = 'dungeonGates';

export interface DungeonGates {
  [index: string]: DungeonGate.State;
}

export interface State {
  byId: DungeonGates;
  allIds: string[];
}
