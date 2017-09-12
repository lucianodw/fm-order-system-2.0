import angular from 'angular';

import AddInventoryComponent from './add-inventory.component';

let AddInventoryModule = angular.module('inventory.add', [
    'ui.bootstrap'
  ])
  .component('addInventory', AddInventoryComponent)
  .name;

export default AddInventoryModule;
