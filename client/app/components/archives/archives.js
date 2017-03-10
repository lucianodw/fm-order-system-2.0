import angular from 'angular';
import uiRouter from 'angular-ui-router';
import archivesComponent from './archives.component';

let archivesModule = angular.module('archives', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('archives', {
      url: '/archives',
      component: 'archives'
    });
})

.component('archives', archivesComponent)

.name;

export default archivesModule;
