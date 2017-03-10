import angular from 'angular';
import Orders from './orders/orders';
import Archives from './archives/archives';
import Inventory from './inventory/inventory';
import Reports from './reports/reports';

let componentModule = angular.module('app.components', [
  Orders,
  Archives,
  Inventory,
  Reports
])

.name;

export default componentModule;
