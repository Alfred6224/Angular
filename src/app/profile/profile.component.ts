import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../services/product.services'; 
import { Product } from '../services/product.services';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  proName: string = '';
  price: string = '';
  band: string = '';

  constructor(private router: Router, private productService: ProductService) {}

  get products(): Product[] {
    return this.productService.getAllProducts();
  }

  addProduct() {
    if (this.proName && this.price && this.band) {
      const newProduct: Product = {  
        id: this.productService.getAllProducts().length + 1,  
        proName: this.proName,
        price: this.price,
        band: this.band,
      };
      this.productService.addProduct(newProduct); 

      this.proName = '';
      this.price = '';
      this.band = '';
    } else {
      alert('Please fill in all fields.');
    }
  }

  viewProduct(product: Product) {
    this.router.navigate(['/display', product.id]);  
  }
}

