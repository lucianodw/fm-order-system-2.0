import angular from 'angular';
import OrdersService from './orders.service';

let ordersModule = angular.module('service.orders', [])
  .service('OrdersService', OrdersService);

export default ordersModule;
