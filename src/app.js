import {PLATFORM} from 'aurelia-pal';

export class App {
  constructor() {
    this.message = 'Hello World!';
  }
  configureRouter(config, router) {
    config.title = 'Aurelia Shopping Cart';
    config.map([
      { route: '', 
        name: 'home',
        moduleId: PLATFORM.moduleName('./features/general/home/home'),
        title:'Home' 
      },
      { 
        route: 'catalog', 
        name: 'catalog',
        moduleId: PLATFORM.moduleName('./features/catalog/catalog/catalog'),
        title:'Products'
      }
    ]);
  }
}
