import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Cart } from 'src/app/models/cart.model';
import { Checkout } from 'src/app/models/checkout.model';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  cart: Cart = new Cart();
  isEmptyCart = true;

  checkout: Checkout = new Checkout();

  constructor(private cartService: CartService, private checkoutService: CheckoutService) {
    this.cartService.cartUpdated$.subscribe( cart => this.updateValues(cart));
    this.checkoutService.checkoutUpdated$.subscribe( checkout => this.updateCheckoutValues(checkout));
  }
  
  updateCheckoutValues(checkout: Checkout): void {
    this.checkout = checkout;
  }
  
  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(cartParam?: Cart) {
    let cart = cartParam ?? this.cartService.getCart();
    if(cart != null){
      this.cart = cart;
      this.isEmptyCart = cart.items.length === 0;
    }
    this.checkout = this.checkoutService.calculateCheckout();    
  }

  updateValues(cart: Cart): void {
    this.loadCart(cart);
  }

  deleteItem(item: CartItem): void {
    this.cartService.removeItem(item.product.id!);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
