import * as React from 'react';
import Wrapper from './Wrapper';
import * as item from '../../item';
import * as location from '../../location';

interface Props {
  readonly name: string;
  readonly attack: number;
  readonly locationId: string;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.name} />
      <item.components.Property>
        Attack: {props.attack}
      </item.components.Property>
      <location.containers.LocationAsProperty id={props.locationId} />
    </Wrapper>
  );
};
