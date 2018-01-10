export interface DungeonMedicine {
  id: string;
  health: number;
  medicineId: string;
  locationId: string;
}

export interface DungeonMedicines {
  [index: string]: DungeonMedicine;
}

export interface State {
  byId: DungeonMedicines;
  allIds: string[];
}
