import { State } from '../_locations';
import * as location from './location';

const locations: State = {
  byId: {
    [location.player.id]: location.player,
    [location.water1.id]: location.water1,
    [location.water2.id]: location.water2,
    [location.water3.id]: location.water3,
    [location.knife.id]: location.knife,
    [location.club.id]: location.club,
    [location.enemy1.id]: location.enemy1,
    [location.enemy2.id]: location.enemy2,
    [location.gate1From.id]: location.gate1From,
    [location.gate1To.id]: location.gate1To,
    [location.gate2From.id]: location.gate2From,
    [location.gate2To.id]: location.gate2To
  },
  allIds: [
    location.player.id,
    location.water1.id,
    location.water2.id,
    location.water3.id,
    location.knife.id,
    location.club.id,
    location.enemy1.id,
    location.enemy2.id,
    location.gate1From.id,
    location.gate1To.id,
    location.gate2From.id,
    location.gate2To.id
  ]
};

export default locations;
