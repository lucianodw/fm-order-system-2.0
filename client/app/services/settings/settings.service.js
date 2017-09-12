import firebase from 'firebase';

class SettingsService {

  constructor($q) {
    'ngInject';

    // --- Dependencies ---
    this.$q = $q;

    this.database = firebase.database();
  }

  // --- Service Functions ---

  // Get All Orders
  getTax() {
    let deferred = this.$q.defer();
    let orders = this.database.ref('/taxRate');

    orders.on('value', function(snapshot) {
      deferred.resolve(snapshot.val());
    });

    return deferred.promise;
  }


  saveTax(taxRate) {
    let updates = {};
    updates['/taxRate/'] = taxRate;

    return this.database.ref().update(updates);
  }

}

export default SettingsService;
