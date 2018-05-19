import {HttpClient} from 'aurelia-fetch-client';
import  { inject } from 'aurelia-framework';
import { Product } from '../../models/product';

@inject(HttpClient)
export class CatalogService{
    constructor(http){
        this.http = http;
    }

    getProducts(){
        return this.http
                    .fetch('http://5aff9bcfaa833c0014363121.mockapi.io/api/products')
                    .then(res => res.json())
                    .then(products => {
                        const updatedProducts = products.map(p => {
                          const prod = new Product(p.name, 
                                            p.id,
                                            p.price,
                                            p.imageUrl,
                                            p.description
                                        );
                            return prod;
                        });
                        return updatedProducts;
                    })
                    
    }
}