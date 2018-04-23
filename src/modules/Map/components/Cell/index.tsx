import * as React from 'react';
import ItemTypes from '../../../ItemTypes';
import './index.css';

interface Props {
  x: number;
  y: number;
  itemType: ItemTypes;
}

export default (props: Props) => {
  var classType;
  switch (props.itemType) {
    case ItemTypes.DARKNESS:
      classType = 'Map-Cell-darkness';
      break;
    case ItemTypes.DUNGEON_ENEMY:
      classType = 'Map-Cell-enemy';
      break;
    case ItemTypes.DUNGEON_GATE:
      classType = 'Map-Cell-gate';
      break;
    case ItemTypes.GROUND:
      classType = 'Map-Cell-ground';
      break;
    case ItemTypes.DUNGEON_MEDICINE:
      classType = 'Map-Cell-medicine';
      break;
    case ItemTypes.DUNGEON_PLAYER:
      classType = 'Map-Cell-player';
      break;
    case ItemTypes.WALL:
      classType = 'Map-Cell-wall';
      break;
    case ItemTypes.DUNGEON_WEAPON:
      classType = 'Map-Cell-weapon';
      break;
    default:
      classType = 'Map-Cell-default';
      break;
  }

  return (
    <td className={'Map-Cell ' + classType} />
  );
};
