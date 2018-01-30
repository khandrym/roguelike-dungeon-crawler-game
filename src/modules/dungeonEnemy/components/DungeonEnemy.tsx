import * as React from 'react';
import { State } from '../model';
import * as enemy from '../../enemy';
import * as location from '../../location';
import * as item from '../../item';

interface Props {
  readonly dungeonEnemy: State;
}

export default (props: Props) => {
  return (
    <enemy.containers.Enemy id={props.dungeonEnemy.enemyId}>
      <item.components.Health value={props.dungeonEnemy.health} />
      <location.containers.LocationAsProperty id={props.dungeonEnemy.locationId} />
    </enemy.containers.Enemy>
  );
};
