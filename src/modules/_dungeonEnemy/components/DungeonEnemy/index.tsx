import * as React from 'react';
import { State } from '../../model';
import * as Enemy from '../../../_enemy';
import * as Location from '../../../_location';
import * as Item from '../../../_item';

interface Props {
  readonly dungeonEnemy: State;
}

export default (props: Props) => {
  return (
    <Enemy.containers.Enemy id={props.dungeonEnemy.enemyId}>
      <Item.components.Health value={props.dungeonEnemy.health} />
      <Location.containers.LocationAsProperty id={props.dungeonEnemy.locationId} />
    </Enemy.containers.Enemy>
  );
};
