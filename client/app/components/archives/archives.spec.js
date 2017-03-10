import ArchivesModule from './archives'
import ArchivesController from './archives.controller';
import ArchivesComponent from './archives.component';
import ArchivesTemplate from './archives.html';

describe('Archives', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ArchivesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ArchivesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ArchivesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ArchivesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ArchivesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ArchivesController);
      });
  });
});
