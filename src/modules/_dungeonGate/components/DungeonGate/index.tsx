import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as Location from '../../../_location';
import * as Item from '../../../_item';

interface Props {
  readonly dungeonGate: State;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <Item.components.Name name="Gate" />
      <Item.components.Property>
        From: <Location.containers.LocationAsLabel id={props.dungeonGate.locationIdFrom} />
      </Item.components.Property>
      <Item.components.Property>
        To: <Location.containers.LocationAsLabel id={props.dungeonGate.locationIdTo} />
      </Item.components.Property>
    </Wrapper>
  );
};
