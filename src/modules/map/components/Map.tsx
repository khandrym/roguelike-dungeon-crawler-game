import * as React from 'react';
import { styled } from '../../theme';

const Table = styled.table`
  border-collapse: collapse;
`;

const TableData = styled.td`
  width: 5px;
  height: 5px;
  background-color: ${props => props.theme.colorMap};
  border-width: 1px;
  border-style: solid;
  border-color: rgb(60,60,60);
  border-collapse: collapse;
`;

export default () => {
  const rows = [];
  for (let i = 0; i < 100; i++) {
    var cells = [];
    for (let j = 0; j < 100; j++) {
      cells[j] = <TableData />;
    }
    rows[i] = (
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
};
