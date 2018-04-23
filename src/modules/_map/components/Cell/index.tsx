import * as React from 'react';
import ItemTypes from '../../../_itemTypes';
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
      classType = 'map-Cell-darkness';
      break;
    case ItemTypes.DUNGEON_ENEMY:
      classType = 'map-Cell-enemy';
      break;
    case ItemTypes.DUNGEON_GATE:
      classType = 'map-Cell-gate';
      break;
    case ItemTypes.GROUND:
      classType = 'map-Cell-ground';
      break;
    case ItemTypes.DUNGEON_MEDICINE:
      classType = 'map-Cell-medicine';
      break;
    case ItemTypes.DUNGEON_PLAYER:
      classType = 'map-Cell-player';
      break;
    case ItemTypes.WALL:
      classType = 'map-Cell-wall';
      break;
    case ItemTypes.DUNGEON_WEAPON:
      classType = 'map-Cell-weapon';
      break;
    default:
      classType = 'map-Cell-default';
      break;
  }

  return (
    <td className={'map-Cell ' + classType} />
  );
};
