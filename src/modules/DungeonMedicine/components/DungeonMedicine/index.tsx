import * as React from 'react';
import { State } from '../../model';
import * as Medicine from '../../../Medicine';
import * as Item from '../../../Item';
import * as Location from '../../../Location';

interface Props {
  readonly dungeonMedicine: State;
}

export default (props: Props) => {
  return (
    <Medicine.containers.MedicineAsItem id={props.dungeonMedicine.medicineId} >
      <Item.components.Health value={props.dungeonMedicine.health} />
      <Location.containers.LocationAsProperty id={props.dungeonMedicine.locationId} />
    </Medicine.containers.MedicineAsItem>
  );
};
