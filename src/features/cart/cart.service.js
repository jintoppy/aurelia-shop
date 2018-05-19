import {HttpClient} from 'aurelia-fetch-client';
import  { inject } from 'aurelia-framework';

@inject(HttpClient)
export class CartService{
    cart = [];
    constructor(http){
        this.http = http;
    }

    addToCart(id){
        this.cart.push(id);
    }
}