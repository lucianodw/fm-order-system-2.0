import angular from 'angular';
import uiRouter from 'angular-ui-router';

import InventoryService from '../../services/inventory/inventory';
import AddInventory from './components/add-inventory/add-inventory';

import inventoryComponent from './inventory.component';

let inventoryModule = angular.module('inventory', [
    uiRouter,
    'ngTable',
    InventoryService.name,
    AddInventory
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('inventory', {
      url: '/inventory',
      component: 'inventory'
    });
})

.component('inventory', inventoryComponent)

.name;

export default inventoryModule;
