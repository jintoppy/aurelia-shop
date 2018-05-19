import {PLATFORM} from 'aurelia-pal';


export class Catalog {     
  constructor() {
  }
  configureRouter(config, router) {
    config.map([
      { route: '', 
        name: 'products',
        moduleId: PLATFORM.moduleName('../product-list/product-list'),
        title:'Products' 
      },
      { route: 'details/:id', 
        name: 'product-details',
        moduleId: PLATFORM.moduleName('../product-details/product-details'),
        title:'Products' 
      }
    ]);

    //http://localhost:8080/#/catalog
  }
}