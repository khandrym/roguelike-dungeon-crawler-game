export interface Dungeon {
  id: string;
  name: string;
}

export interface Dungeons {
  [index: string]: Dungeon;
}

export interface State {
  byId: Dungeons;
  allIds: string[];
}
