import firebase from 'firebase';

class InventoryService {

  constructor($q) {
    'ngInject';

    // --- Dependencies ---
    this.$q = $q;

    this.database = firebase.database();

  }



  // --- Service Functions ---
  itemObj() {
    return {
      name: '',
      unit: '',
      category: '',
      status: 'Active',
      slot: 0
    };
  }

  getItems() {
    let deferred = this.$q.defer();
    let inventory = this.database.ref('/inventory').orderByChild('slot');

    inventory.on('value', function(snapshot) {
      let items = [];

      snapshot.forEach(function(child) {
        items.push({...child.val(), key: child.key});
      });

      deferred.resolve(items);
    });

    return deferred.promise;
  }

  addItem(item, id) {
    let newItem = {...item, id};
    let newId = id+1;

    let updates = {};
    updates['/inventory/' + id] = newItem;
    updates['/inventoryIndex/'] = newId;

    return this.database.ref().update(updates);
  }

  resetSlots(items) {
    let updates = {};
    let updatedItems = {};

    _.each(items, (item) => {
      let key = item.key;
      delete item.key;

      updatedItems[key] = {...item};
    });

    updates['/inventory/'] = updatedItems;

    return this.database.ref().update(updates);
  }

  removeItem(id) {
    let path = '/inventory/' + id;
    return this.database.ref(path).remove();
  }

  getNextId() {
    let deferred = this.$q.defer();
    let inventory = this.database.ref('/inventoryIndex');

    inventory.on('value', function(snapshot) {
      deferred.resolve(snapshot.val());
    });

    return deferred.promise;
  }


}

export default InventoryService;
