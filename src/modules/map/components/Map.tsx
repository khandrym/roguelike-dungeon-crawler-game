import * as React from 'react';
import { connect } from 'react-redux';
import { styled, Theme } from '../../theme';
import ItemTypes from '../../itemTypes';
import * as store from '../../store';

const Table = styled.table`
  border-collapse: collapse;
`;

interface PropsTableData {
  itemType: ItemTypes;
  className?: string;
  theme?: Theme;
}

const TableData: React.StatelessComponent<PropsTableData> = (props) => {
  return (
    <td className={props.className}>
      {props.children}
    </td>
  );
};

const StyledTableData = styled(TableData) `
  width: 5px;
  height: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colorBorder};
  border-collapse: collapse;
  background-color: ${(props) => {
    switch (props.itemType) {
      case ItemTypes.PLAYER:
        return props.theme.colorPrimary;
      case ItemTypes.DARKNESS:
        return props.theme.colorDarkness;
      case ItemTypes.GROUND:
        return props.theme.colorGround;
      case ItemTypes.WALL:
        return props.theme.colorWall;
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

interface MapStateProps {
  playerX: number;
  playerY: number;
}

interface MapDispatchProps {
}

interface MapProps extends MapStateProps, MapDispatchProps { }

function Map(props: MapProps) {
  const rows = [];
  for (let j = 0; j < 100; j++) {
    var cells = [];
    for (let i = 0; i < 100; i++) {
      if (i === props.playerX && j === props.playerY) {
        cells[i] = <StyledTableData itemType={ItemTypes.PLAYER} />;
      } else {
        cells[i] = <StyledTableData itemType={ItemTypes.GROUND} />;
      }
    }
    rows[j] = (
      <tr>
        {cells}
      </tr>
    );
  }
  return (
    <Table>
      {rows}
    </Table>
  );
}

function mapStateToProps(s: store.State): MapStateProps {
  return {
    playerX: s.locations.byId[s.player.locationId].x,
    playerY: s.locations.byId[s.player.locationId].y
  };
}

function mapDispatchToProps(): MapDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
