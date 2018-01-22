import * as React from 'react';
import Wrapper from './Wrapper';
import * as item from '../../item';

interface Props {
  readonly name: string;
  readonly health: number;
  readonly experience: number;
  readonly weaponName: string;
  readonly attack: number;
  readonly x: number;
  readonly y: number;
  readonly dungeonName: string;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.name} />
      <item.components.Health value={props.health} />
      <item.components.Level experience={props.experience} />
      <item.components.Experience value={props.experience} />
      <item.components.Weapon name={props.weaponName} attack={props.attack} />
      <item.components.Location
        x={props.x}
        y={props.y}
        dungeonName={props.dungeonName}
      />
    </Wrapper>
  );
};
