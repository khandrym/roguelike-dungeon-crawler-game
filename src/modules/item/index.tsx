import it from './itemTypes';
import cItem from './components/Item';
import cItemExperience from './components/ItemExperience';
import cItemHealth from './components/ItemHealth';
import cItemLocatin from './components/ItemLocation';
import cItemName from './components/ItemName';
import cItemProperty from './components/ItemProperty';
import cItemWeapon from './components/ItemWeapon';

export const ItemTipes = it;

export const components = {
  Item: cItem,
  ItemExperience: cItemExperience,
  ItemHealth: cItemHealth,
  ItemLocation: cItemLocatin,
  ItemName: cItemName,
  ItemProperty: cItemProperty,
  ItemWeapon: cItemWeapon
};
