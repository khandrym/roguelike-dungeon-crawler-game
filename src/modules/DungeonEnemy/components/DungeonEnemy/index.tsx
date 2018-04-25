import * as React from 'react';
import { State } from '../../model';
import * as Enemy from '../../../Enemy';
import * as Location from '../../../Location';
import * as Item from '../../../Item';

interface Props {
  readonly dungeonEnemy: State;
}

export default (props: Props) => {
  return (
    <Enemy.containers.Enemy id={props.dungeonEnemy.enemyId}>
      <Item.components.Health value={props.dungeonEnemy.health} />
      <Item.components.Experience value={props.dungeonEnemy.experience} />
      <Location.containers.LocationAsProperty id={props.dungeonEnemy.locationId} />
    </Enemy.containers.Enemy>
  );
};
