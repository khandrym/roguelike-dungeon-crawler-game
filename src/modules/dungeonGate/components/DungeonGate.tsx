import * as React from 'react';
import Wrapper from './Wrapper';
import * as item from '../../item';

interface Props {
  readonly fromDungeonName: string;
  readonly toDungeonName: string;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name="Gate" />
      <item.components.Property>
        From: {props.fromDungeonName}
      </item.components.Property>
      <item.components.Property>
        To: {props.toDungeonName}
      </item.components.Property>
    </Wrapper>
  );
};
