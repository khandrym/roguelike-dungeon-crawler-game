import * as React from 'react';
import * as theme from '../../theme';
import * as item from '../../item';
import PlayerName from './PlayerName';
import PlayerHealth from './PlayerHealth';
import PlayerLocation from './PlayerLocation';

interface Props {
  theme?: theme.Theme;
}

export default (props: Props) => {
  return (
    <item.components.Item itemType={item.ItemTipes.PLAYER}>
      <PlayerName />
      <PlayerHealth />
      <PlayerLocation />
    </item.components.Item>
  );
};
