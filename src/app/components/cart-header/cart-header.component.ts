import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {

  hasItemInCart = false;
  itensQuantity = 0;
  constructor(private cartService: CartService) {
    this.cartService.cartUpdated$.subscribe( cart => this.updateValues(cart));
  }

  ngOnInit(): void {
    let cart = this.cartService.getCart();
    if(cart != null){
      this.updateValues(cart);
    }
  }

  private updateValues(cart: Cart) {
    this.hasItemInCart = cart.items.length > 0 ?? false;
    this.itensQuantity = cart.items.length;
  }
}
