import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reportsComponent from './reports.component';

let reportsModule = angular.module('reports', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('reports', {
      url: '/reports',
      component: 'reports'
    });
})

.component('reports', reportsComponent)

.name;

export default reportsModule;
