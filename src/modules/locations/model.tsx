export interface Location {
  id: string;
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
