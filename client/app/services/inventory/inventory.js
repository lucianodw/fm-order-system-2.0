import angular from 'angular';
import InventoryService from './inventory.service';

let inventoryModule = angular.module('service.inventory', [])
  .service('InventoryService', InventoryService);

export default inventoryModule;
