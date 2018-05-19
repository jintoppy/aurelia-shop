import { inject } from 'aurelia-framework';
import { CatalogService } from '../catalog.service';
import { CartService } from '../../cart/cart.service';

@inject(CatalogService, CartService)
export class ProductList {     
  constructor(catalogService, cartService) {
    this.catalogService = catalogService;
    this.cartService = cartService;
    this.products = [];
  }

  addToCart(productId){
    this.cartService.addToCart(productId);
  }

  activate(){
    this.catalogService.getProducts()
              .then(products => {
                this.products = products;
              })
  }

}