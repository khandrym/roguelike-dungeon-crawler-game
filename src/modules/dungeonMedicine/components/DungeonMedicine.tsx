import * as React from 'react';
import Wrapper from './Wrapper';
import * as item from '../../item';
import * as location from '../../location';

interface Props {
  readonly name: string;
  readonly health: number;
  readonly locationId: string;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.name} />
      <item.components.Health value={props.health} />
      <location.containers.LocationAsProperty id={props.locationId} />
    </Wrapper>
  );
};
