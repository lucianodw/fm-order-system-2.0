class OrdersController {
  constructor(OrdersService, NgTableParams) {
    'ngInject';
    this.name = 'orders';

    // --- Dependencies ---
    this.OrdersService = OrdersService;
    this.NgTableParams = NgTableParams;
  }

  // --- LifeCycle Hooks ---
  $onInit() {

    // Get Orders from Database
    this.OrdersService.getOrders().then(results => {
      this.orders = results;
    });

    // NG Table Plugin Set-Up
    this.params = new this.NgTableParams({
      page:    1,           // show first page
      count:   10,          // count per page
      sorting: {
        created: 'desc'     // initial sorting
      }
    }, { dataset: this.orders});
  }

  // --- Local Methods ---
  updateStatus(event) {
    this.orders[event.id].status = event.status;

    this.OrdersService.saveStatus(event.status, event.id).then(result => {
      console.log('finished update', result)
    });
  }

}

export default OrdersController;
