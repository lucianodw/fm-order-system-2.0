class OrderViewController {
  constructor($window, $stateParams, OrdersService) {
    'ngInject';

    // --- Dependencies ---
    this.$window = $window;
    this.$stateParams = $stateParams;

    // --- Services ---
    this.OrdersService = OrdersService;

    // --- Defaults ---
    this.id = '';
    this.order = {};
    this.loading = true;
  }

  // --- Lifecycle Hooks ---
  $onInit() {
    this.id = this.$stateParams.id;

    // Get Orders from Database
    this.OrdersService.getOrder(this.id).then(results => {
      this.order = results;
      this.loading = false;
      console.log('this.order', this.order);
    });

  }

  // --- Local Methods ---
  print() {
    $window.print();
  }
}

export default OrderViewController;
