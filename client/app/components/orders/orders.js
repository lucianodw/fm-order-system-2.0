import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngTable from 'ng-table';

import OrdersService from '../../services/orders/orders';
import ChangeOrderStatus from './components/change-order-status/change-order-status';

import ordersComponent from './orders.component';

let ordersModule = angular.module('orders', [
    uiRouter,
    'ngTable',
    OrdersService.name,
    ChangeOrderStatus
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('orders', {
      url: '/',
      component: 'orders'
    });
})

.component('orders', ordersComponent)

.name;

export default ordersModule;
