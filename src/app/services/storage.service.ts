import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private CARTKEY = 'cart';

  storeCart(cart: Cart) {
    localStorage.setItem(this.CARTKEY, JSON.stringify(cart));
  }

  getCart(): Cart | null {
    let storageCart = localStorage.getItem(this.CARTKEY);
    if (storageCart != null) {
      let cart = JSON.parse(storageCart) as Cart;
      return cart;
    } else {
      return null;
    }
  }

  checkState() {
    let cart = this.getCart();

    if(cart != null)
      console.log('Cart State: ', cart);
  }

  clearCart(){
    localStorage.removeItem(this.CARTKEY);
  }
}
