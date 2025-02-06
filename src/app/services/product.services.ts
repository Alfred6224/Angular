import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  proName: string;
  price: string;
  band: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.products.push(product);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
