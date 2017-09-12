import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firebase from 'firebase';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE, FIREBASE_STORAGE_BUCKET } from './constants/firebase.constants';
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


    let config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE,
      storageBucket: FIREBASE_STORAGE_BUCKET
    };

    firebase.initializeApp(config);
  })

  .component('app', AppComponent);
