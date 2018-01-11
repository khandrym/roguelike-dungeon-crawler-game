export interface DungeonEnemy {
  id: string;
  health: number;
  enemyId: string;
  locationId: string;
}

export interface DungeonEnemies {
  [index: string]: DungeonEnemy;
}

export interface State {
  byId: DungeonEnemies;
  allIds: string[];
}
