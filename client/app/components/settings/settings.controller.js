class SettingsController {
  constructor(SettingsService) {
    'ngInject';

    // --- Dependencies ---
    this.SettingsService = SettingsService;

    this.edit = {
      tax: false
    };
  }

  // --- LifeCycle Hooks ---
  $onInit() {
    this.SettingsService.getTax().then(results => {
      console.log('results', results);
      this.taxRate = results;
    });
  }

  // --- Local Methods ---
  editTax(){
    this.edit['tax'] = true;
  }

  saveTax(){
    this.edit['tax'] = false;
    this.SettingsService.saveTax(this.taxRate).then(results => {
      
    });
  }
}

export default SettingsController;
