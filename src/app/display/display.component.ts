import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.services';  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']

})
export class DisplayComponent implements OnInit {
  productId: number | null = null;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService 
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      this.product = this.productService.getProductById(this.productId); 
    });
  }
}
