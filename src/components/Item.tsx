import * as React from 'react';
import styled from '../theme/styled-components';
import Theme from '../theme/theme';

export enum ItemTypes {
  PLAYER = 'PLAYER',
  ENEMY = 'ENEMY',
  WEAPON = 'WEAPON',
  MEDICINE = 'MEDICINE',
  GATE = 'GATE'
}

interface Props {
  itemType: ItemTypes;
  className?: string;
  theme?: Theme;
}

const Item: React.StatelessComponent<Props> = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default styled(Item) `
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
`;
