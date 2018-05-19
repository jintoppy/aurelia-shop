import  { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class MiniCart {     
  count = 0;
  constructor(ea) {
    this.message = 'Hello world';
    ea.subscribe('addedToCart', (res) => {
      this.count = res;
    });
  }
}