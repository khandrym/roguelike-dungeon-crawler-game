import * as React from 'react';
import Cell from '../containers/Cell';
import './Map.css';

export default () => {
  const rows = [];
  for (let j = 0; j < 100; j++) {
    var cells = [];
    for (let i = 0; i < 100; i++) {
      cells[i] = <Cell x={i} y={j} key={i} />;
    }
    rows[j] = (
      <tr key={j}>
        {cells}
      </tr>
    );
  }

  return (
    <div>
      <table className="map-Map">
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};
