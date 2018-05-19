import { inject } from 'aurelia-framework';
import { CatalogService } from '../catalog.service';

@inject(CatalogService)
export class ProductList {     
  constructor(service) {
    this.service = service;
    this.products = [];
  }

  activate(){
    this.service.getProducts()
              .then(products => {
                this.products = products;
              })
  }

}