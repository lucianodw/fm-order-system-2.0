class ChangeOrderStatusController {
  constructor($uibModal, $document) {
    'ngInject';
    //@Input [status]
    //@Input [id]

    this.$uibModal = $uibModal;
    this.$document = $document;

  }

  // --- LifeCycle Hooks ---
  $onInit() {

  }

  // --- @Output ---
  updateStatus(status) {
    console.log('---updatestatus---', status)
    this.onUpdate({
      $event: {
        id: this.id,
        status
      }
    })
  }

  // --- Local Methods ---
  openModal(){
    console.log('open modal');

    let modal = this.$uibModal.open({
      ariaLabelledBy: 'update-status',
      ariaDescribedBy: 'update-status',
      size: 'md',
      templateUrl: 'app/components/orders/components/change-order-status/_status-modal.html',
      controllerAs: '$ctrl',
      appendTo: angular.element(this.$document[0].querySelector('.fm-modal')),
      resolve: {
        status: () => {
          return this.status;
        }
      },
      controller: function($uibModalInstance, status){
        'ngInject';

        // --- Dependencies ---
        this.status = status;
        this.$uibModalInstance = $uibModalInstance;

        this.setStatus = (status) => {
          this.$uibModalInstance.close({status});
        };

        console.log('modal opened w/ status');
      }
    });

    modal.result.then(result => {
      console.log('modal saved', result);
      this.updateStatus(result.status);
    }, () => {
      console.log('modal closed', result);
    });
  }


}

export default ChangeOrderStatusController;
