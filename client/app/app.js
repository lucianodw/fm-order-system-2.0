import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(() => {
    "ngInject";

  })

  .component('app', AppComponent);
