import firebase from 'firebase';

class OrdersService {

  constructor($q) {
    'ngInject';

    // --- Dependencies ---
    this.$q = $q;

    this.database = firebase.database();
    console.log('rootRef', this.database);


  }

  // --- Service Functions ---

  // Get All Orders
  getOrders() {
    let deferred = this.$q.defer();
    let orders = this.database.ref('/orders');

    orders.on('value', function(snapshot) {
      deferred.resolve(snapshot.val());
    });

    return deferred.promise;
  }

  // Get Single Order by ID
  getOrder(id) {
    let deferred = this.$q.defer();
    let order = this.database.ref('/orders/' + id);

    order.on('value', function(snapshot) {
      deferred.resolve(snapshot.val());
    });

    return deferred.promise;
  }


  saveStatus(status, id) {
    let updates = {};
    updates['/orders/' + id + '/status'] = status;

    return this.database.ref().update(updates);
  }

}

export default OrdersService;
