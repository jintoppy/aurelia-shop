import {HttpClient} from 'aurelia-fetch-client';
import  { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(HttpClient, EventAggregator)
export class CartService{
    cart = [];
    constructor(http, ea){
        this.http = http;
        this.ea = ea;
    }

    addToCart(id){
        this.cart.push(id);
        this.ea.publish('addedToCart', this.cart.length);
    }
}