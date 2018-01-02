import it from './itemTypes';
import cItem from './components/Item';
import cItemHealth from './components/ItemHealth';
import cItemLocatin from './components/ItemLocation';
import cItemName from './components/ItemName';
import cItemProperty from './components/ItemProperty';

export const ItemTipes = it;

export const components = {
  Item: cItem,
  ItemHealth: cItemHealth,
  ItemLocation: cItemLocatin,
  ItemName: cItemName,
  ItemProperty: cItemProperty
};
