import * as React from 'react';
import * as theme from '../../theme';
import * as item from '../../item';
import PlayerName from './PlayerName';
import PlayerHealth from './PlayerHealth';
import PlayerLevel from './PlayerLevel';
import PlayerExperience from './PlayerExperience';
import PlayerLocation from './PlayerLocation';
import PlayerWeapon from './PlayerWeapon';

interface Props {
  theme?: theme.Theme;
}

export default (props: Props) => {
  return (
    <item.components.Item itemType={item.ItemTipes.PLAYER}>
      <PlayerName />
      <PlayerHealth />
      <PlayerLevel />
      <PlayerExperience />
      <PlayerWeapon />
      <PlayerLocation />
    </item.components.Item>
  );
};
