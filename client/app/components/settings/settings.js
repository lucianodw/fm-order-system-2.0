import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SettingsService from '../../services/settings/settings';

import settingsComponent from './settings.component';

let settingsModule = angular.module('settings', [
    uiRouter,
    SettingsService.name
])

.component('settings', settingsComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('settings', {
      url: '/settings',
      component: 'settings'
    });
})

.name;

export default settingsModule;
