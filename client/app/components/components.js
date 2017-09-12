import angular from 'angular';

import Orders from './orders/orders';
import OrderView from './order-view/order-view';

import Archives from './archives/archives';
import Inventory from './inventory/inventory';
import Reports from './reports/reports';
import Settings from './settings/settings';

let componentModule = angular.module('app.components', [
  Orders,
  OrderView,
  Archives,
  Inventory,
  Reports,
  Settings
])

.name;

export default componentModule;
