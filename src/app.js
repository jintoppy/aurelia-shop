import {PLATFORM} from 'aurelia-pal';
import { inject, TaskQueue } from 'aurelia-framework';

@inject(Element, TaskQueue)
export class App {
  constructor(el, taskQueue) {
    this.message = 'Hello World!';
    this.taskQueue = taskQueue;
    this.users = [
      {
        name: 'hi'
      }
    ];
    this.el = el;
  }

  addUser(){
    this.users.push({
      name: 'newuser'
    });
    this.taskQueue.queueTask(() => {
      this.el.querySelector(`li:nth-child(${this.users.length}) input`).focus();
    });
    
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
