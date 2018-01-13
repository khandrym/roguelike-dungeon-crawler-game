import * as React from 'react';
import * as player from '../../player';
import * as enemy from '../../enemy';
import './Info.css';

export default () => {
  return (
    <div className="Info">
      <player.components.Player />
      <enemy.components.Enemy />
    </div>
  );
};
