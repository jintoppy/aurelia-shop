import {PLATFORM} from 'aurelia-pal';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./mini-cart/mini-cart')
    ]);
}
  