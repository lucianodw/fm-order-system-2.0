class AddInventoryController {
  constructor(InventoryService) {
    'ngInject';

    // --- Dependencies ---
    this.InventoryService = InventoryService;

    // --- Defauls ---
    this.item = InventoryService.itemObj();

  }

  // --- LifeCycle Hooks ---
  $onInit() {
    this.getNextIndex();
  }

  $onChanges() {
    this.listTotal = this.listTotal;
  }

  // --- @Output ---
  addInventory(item) {
    this.onAdd();
    this.resetForm();
  }

  // --- Local Methods ---
  getNextIndex() {
    this.InventoryService.getNextId().then(result => {
      this.id = result;
    });
  }

  saveItem() {
    this.item.slot = this.listTotal+1;

    this.InventoryService.addItem(this.item, this.id).then(results => {
      this.getNextIndex();
      this.addInventory();
    });
  }

  resetForm() {
    this.item = this.InventoryService.itemObj();
  }

}

export default AddInventoryController;
