import angular from 'angular';
import uiRouter from 'angular-ui-router';

import OrdersService from '../../services/orders/orders';

import orderViewComponent from './order-view.component';

let orderViewModule = angular.module('orders.view', [
    uiRouter,
    OrdersService.name,
])

.component('orderView', orderViewComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('view', {
      url: '/orders/view/{id}',
      component: 'orderView'
    });
})

.name;

export default orderViewModule;
