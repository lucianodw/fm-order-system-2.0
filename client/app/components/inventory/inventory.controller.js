import _ from 'lodash';

class InventoryController {
  constructor($scope, NgTableParams, InventoryService) {
    'ngInject';

    // -- Dependencies ---
    this.$scope = $scope;
    this.NgTableParams = NgTableParams;

    // --- Services ---
    this.InventoryService = InventoryService;

  }

  // --- Lifecycle Hooks ---
  $onInit(){
    this.edit = null;
    this.getInventory();

    this.params = new this.NgTableParams({
      page:    1,           // show first page
      count:   10,          // count per page
      sorting: {
        slot: 'desc'     // initial sorting
      }
    }, { dataset: this.items });
  }

  // --- Local Methods ---
  getInventory(reset = false) {
    this.InventoryService.getItems().then(results => {
      this.items = results;
      this.listTotal = this.items.length;

      if(reset) {
        this.resetSlots();
      }
    });
  }

  addItem() {
    this.getInventory();
  }

  editItem(id){
    this.edit = id;
  }

  saveItem(){
    this.edit = null;
  }

  removeItem(id){
    this.InventoryService.removeItem(id).then(results => {
      this.getInventory(true);
    });
  }

  moveUp(index) {
    let newIndex = index-1;
    this.items[newIndex] = this.items.splice(index, 1, this.items[newIndex])[0];

    this.resetSlots();
  }

  moveDown(index) {
    let newIndex = index+1;
    this.items[newIndex] = this.items.splice(index, 1, this.items[newIndex])[0];

    this.resetSlots();
  }

  resetSlots() {
    let items = angular.copy(this.items);

    _.each(this.items, (item, index) => {
        items[index] = {...this.items[index], slot: index+1};
    });

    this.InventoryService.resetSlots(items).then(() => {
      this.getInventory();
    });

  }

}

export default InventoryController;
