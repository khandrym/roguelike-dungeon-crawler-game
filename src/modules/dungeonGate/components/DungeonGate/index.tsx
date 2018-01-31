import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as location from '../../../location';
import * as item from '../../../item';

interface Props {
  readonly dungeonGate: State;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name="Gate" />
      <item.components.Property>
        From: <location.containers.LocationAsLabel id={props.dungeonGate.locationIdFrom} />
      </item.components.Property>
      <item.components.Property>
        To: <location.containers.LocationAsLabel id={props.dungeonGate.locationIdTo} />
      </item.components.Property>
    </Wrapper>
  );
};
