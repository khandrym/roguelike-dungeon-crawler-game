import * as React from 'react';
import * as theme from '../../theme';
import ItemTypes from '../itemTypes';

interface Props {
  itemType: ItemTypes;
  className?: string;
  theme?: theme.Theme;
}

const Item: React.StatelessComponent<Props> = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default theme.styled(Item) `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props) => {
    switch (props.itemType) {
      case ItemTypes.PLAYER:
        return props.theme.colorPrimary;
      case ItemTypes.ENEMY:
        return props.theme.colorEnemy;
      case ItemTypes.WEAPON:
        return props.theme.colorWeapon;
      case ItemTypes.MEDICINE:
        return props.theme.colorMedicine;
      case ItemTypes.GATE:
        return props.theme.colorGate;
      default:
        return props.theme.colorPrimary;
    }
  }};
  margin: 0 50px;
`;
