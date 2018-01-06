export interface Medicine {
  id: string;
  name: string;
  health: number;
}

export interface Medicines {
  [index: string]: Medicine;
}

export interface State {
  byId: Medicines;
  allIds: string[];
}
