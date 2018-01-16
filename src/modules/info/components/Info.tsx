import * as React from 'react';
import * as player from '../../player';
import * as enemy from '../../enemy';
import './Info.css';

export default () => {
  return (
    <div className="Info">
      <player.containers.Player />
      <enemy.components.Enemy />
    </div>
  );
};
