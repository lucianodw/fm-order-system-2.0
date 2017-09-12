import angular from 'angular';
import SettingsService from './settings.service';

let settingsModule = angular.module('service.settings', [])
  .service('SettingsService', SettingsService);

export default settingsModule;
