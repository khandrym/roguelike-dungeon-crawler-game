import { State } from './model';
import * as location from '../location';

export const locations: State = {
  byId: {
    [location.initials.player.id]: location.initials.player,
    [location.initials.water1.id]: location.initials.water1,
    [location.initials.water2.id]: location.initials.water2,
    [location.initials.water3.id]: location.initials.water3,
    [location.initials.knife.id]: location.initials.knife,
    [location.initials.club.id]: location.initials.club,
    [location.initials.enemy1.id]: location.initials.enemy1,
    [location.initials.enemy2.id]: location.initials.enemy2,
    [location.initials.gate1From.id]: location.initials.gate1From,
    [location.initials.gate1To.id]: location.initials.gate1To,
    [location.initials.gate2From.id]: location.initials.gate2From,
    [location.initials.gate2To.id]: location.initials.gate2To
  },
  allIds: [
    location.initials.player.id,
    location.initials.water1.id,
    location.initials.water2.id,
    location.initials.water3.id,
    location.initials.knife.id,
    location.initials.club.id,
    location.initials.enemy1.id,
    location.initials.enemy2.id,
    location.initials.gate1From.id,
    location.initials.gate1To.id,
    location.initials.gate2From.id,
    location.initials.gate2To.id
  ]
};
