import angular from 'angular';

import changeOrderStatusComponent from './change-order-status.component';

let changeOrderStatusModule = angular.module('orders.changeOrderStatus', [
    'ui.bootstrap'
  ])
  .component('changeOrderStatus', changeOrderStatusComponent)
  .name;

export default changeOrderStatusModule;
