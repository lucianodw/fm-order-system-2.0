class ChangeOrderStatusController {
  constructor() {
    'ngInject';
  }

  // --- LifeCycle Hooks ---
  $onInit() {
    console.log('orderstatus', this.status);
  }

  // --- @Output ---
  updateStatus() {
    this.onUpdate({
      $event: {
        status: this.status
      }
    })
  }


}

export default ChangeOrderStatusController;
