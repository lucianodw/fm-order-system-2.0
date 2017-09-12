import template from './add-inventory.html';
import controller from './add-inventory.controller';

let addInventoryComponent = {
  bindings: {
    listTotal: '<',
    onAdd: '&'
  },
  template,
  controller
};

export default addInventoryComponent;
