import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPlayload } from '../interfaces/playload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  post(playload: ProductPlayload) {
    return this.httpClient.post('/api/products', playload);
  }

}
