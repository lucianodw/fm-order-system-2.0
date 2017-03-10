import template from './change-order-status.html';
import controller from './change-order-status.controller';

let changeOrderStatusComponent = {
  bindings: {
    status: '<',
    onUpdate: '&'
  },
  template,
  controller
};

export default changeOrderStatusComponent;
