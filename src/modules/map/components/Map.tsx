import * as React from 'react';
import { connect } from 'react-redux';
import * as store from '../../store';
import './Map.css';

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
        cells[i] = <td className="MapCell MapCell-player" />;
      } else {
        cells[i] = <td className="MapCell MapCell-ground" />;
      }
    }
    rows[j] = (
      <tr>
        {cells}
      </tr>
    );
  }
  return (
    <table className="Map">
      <tbody>
        {rows}
      </tbody>
    </table>
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
