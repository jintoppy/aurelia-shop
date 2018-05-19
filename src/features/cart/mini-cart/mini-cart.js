import  { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class MiniCart {     
  count = 0;
  constructor(ea) {
    console.log('within constructor');
    ea.subscribe('addedToCart', (res) => {
      this.count = res;
    });
  }

  created(){
    console.log('created');
  }

  bind(){
    console.log('bind');
  }

  attached(){
    console.log('inside attached');
  }


}