import * as React from 'react';
import { connect } from 'react-redux';
import * as store from '../../store';
import * as location from '../../location';
import * as player from '../../player';
import * as dungeonEnemies from '../../dungeonEnemies';
import * as dungeonEnemy from '../../dungeonEnemy';
import * as dungeonGates from '../../dungeonGates';
import * as dungeonGate from '../../dungeonGate';
import * as dungeonMedicines from '../../dungeonMedicines';
import * as dungeonMedicine from '../../dungeonMedicine';
import * as dungeonWeapons from '../../dungeonWeapons';
import * as dungeonWeapon from '../../dungeonWeapon';

interface OwnProps {
  isVisible: (playerLocation: location.State, itemLocation: location.State) => boolean;
}

interface StateProps {
  dungeonItem: JSX.Element;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return props.dungeonItem;
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  let dungeonItem = <div />;

  const playerLocation = player.getLocation(state);

  dungeonEnemies.getAllIds(state).forEach((dungeonEnemyId) => {
    const dungeonEnemyLocation = dungeonEnemy.getLocation(state, dungeonEnemyId);
    if (ownProps.isVisible(playerLocation, dungeonEnemyLocation)) {
      dungeonItem = <dungeonEnemy.containers.DungeonEnemy id={dungeonEnemyId} />;
    }
  });

  dungeonGates.getAllIds(state).forEach((dungeonGateId) => {
    const dungeonGateLocation = dungeonGate.getFromLocation(state, dungeonGateId);
    if (ownProps.isVisible(playerLocation, dungeonGateLocation)) {
      dungeonItem = <dungeonGate.containers.DungeonGate id={dungeonGateId} />;
    }
  });

  dungeonMedicines.getAllIds(state).forEach((dungeonMedicineId) => {
    const dungeonMedicineLocation = dungeonMedicine.getLocation(state, dungeonMedicineId);
    if (ownProps.isVisible(playerLocation, dungeonMedicineLocation)) {
      dungeonItem = <dungeonMedicine.containers.DungeonMedicine id={dungeonMedicineId} />;
    }
  });

  dungeonWeapons.getAllIds(state).forEach((dungeonWeaponId) => {
    const dungeonWeaponLocation = dungeonWeapon.getLocation(state, dungeonWeaponId);
    if (ownProps.isVisible(playerLocation, dungeonWeaponLocation)) {
      dungeonItem = <dungeonWeapon.containers.DungeonWeapon id={dungeonWeaponId} />;
    }
  });

  return {
    dungeonItem: dungeonItem
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
