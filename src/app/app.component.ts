import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dealeron-sales-ui';

  constructor(private cartService: CartService, private productService: ProductService){}

  products: Product[] = [];
  
  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}