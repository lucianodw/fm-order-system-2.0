import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE, FIREBASE_STORAGE_BUCKET } from '../../constants/firebase.constants';
import firebase from 'firebase';

class OrdersService {

  constructor($q) {
    'ngInject';

    // --- Dependencies ---
    this.$q = $q;

    let config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE,
      storageBucket: FIREBASE_STORAGE_BUCKET
    };

    firebase.initializeApp(config);

    this.database = firebase.database();
    console.log('rootRef', this.database);


  }

  // --- Service Functions ---

  getOrders() {
    let deferred = this.$q.defer();

    this.orders = this.database.ref('/orders');

    this.orders.on('value', function(snapshot) {
      deferred.resolve(snapshot.val());
    });

    return deferred.promise;
  }

}

export default OrdersService;
