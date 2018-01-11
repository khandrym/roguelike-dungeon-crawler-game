export interface DungeonGate {
  id: string;
  locationIdFrom: string;
  locationIdTo: string;
}

export interface DungeonGates {
  [index: string]: DungeonGate;
}

export interface State {
  byId: DungeonGates;
  allIds: string[];
}
