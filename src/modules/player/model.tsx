export const NAME = 'player';

export interface State {
  name: string;
  health: number;
  experience: number;
  locationId: string;
  weaponId: string;
}
