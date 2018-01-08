export interface Location {
  id: string;
  dungeonId: string;
  x: number;
  y: number;
}

export interface Locations {
  [index: string]: Location;
}

export interface State {
  byId: Locations;
  allIds: string[];
}
