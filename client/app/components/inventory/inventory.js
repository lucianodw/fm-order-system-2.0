import angular from 'angular';
import uiRouter from 'angular-ui-router';
import inventoryComponent from './inventory.component';

let inventoryModule = angular.module('inventory', [
  uiRouter
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
