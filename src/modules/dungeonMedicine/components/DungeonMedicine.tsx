import * as React from 'react';
import { State } from '../model';
import * as medicine from '../../medicine';
import * as item from '../../item';
import * as location from '../../location';

interface Props {
  readonly dungeonMedicine: State;
}

export default (props: Props) => {
  return (
    <medicine.containers.MedicineAsItem id={props.dungeonMedicine.medicineId} >
      <item.components.Health value={props.dungeonMedicine.health} />
      <location.containers.LocationAsProperty id={props.dungeonMedicine.locationId} />
    </medicine.containers.MedicineAsItem>
  );
};
