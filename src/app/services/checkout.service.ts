import { EventEmitter, Injectable } from '@angular/core';
import { Checkout } from '../models/checkout.model';
import { CartService } from './cart.service';
import { TaxService } from './tax.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public checkoutUpdated$!: EventEmitter<Checkout>;
  checkout: Checkout = new Checkout();
  constructor(private cartService: CartService, private taxService: TaxService) {
    this.checkoutUpdated$ = new EventEmitter();
  }

  calculateSubTotal(): number {
    this.checkout.subtotal = 0;

    let cart = this.cartService.getCart();
    if(cart != null){
      for(let i=0; i < cart.items.length; i++){
        let sellValue = this.taxService.calculateSellValue(cart.items[i].product);
        this.checkout.subtotal += cart.items[i].quantity * sellValue;
      }
    }

    this.checkoutUpdated$.emit(this.checkout);
    return this.checkout.subtotal;
  }

  calculateTotal(): number {
    this.checkout.total = 0;

    let subtotal = this.calculateSubTotal();
    let taxes = this.calculateSalesTaxes();
    let importedTaxes = this.calculateImportedTaxes();
    this.checkout.total = subtotal + taxes + importedTaxes;

    this.checkoutUpdated$.emit(this.checkout);
    return this.checkout.total;
  }

  calculateSalesTaxes(): number {
    this.checkout.taxes = 0;

    let cart = this.cartService.getCart();
    if(cart != null){
      let notImportedProducts = cart.items.filter((prd, idx, arr) => prd.product.isImported == false);
      for(let i=0; i < notImportedProducts.length; i++){
        let taxValue = this.taxService.calculateTax(cart.items[i].product);
        this.checkout.taxes += taxValue;
      }
    }

    this.checkoutUpdated$.emit(this.checkout);
    return this.checkout.taxes;
  }
  
  calculateImportedTaxes(): number {
    this.checkout.importedTaxes = 0;

    let cart = this.cartService.getCart();
    if(cart != null){
      let importedProducts = cart.items.filter((prd, idx, arr) => prd.product.isImported == true);
      for(let i=0; i < importedProducts.length; i++){
        let taxValue = this.taxService.calculateTax(cart.items[i].product);
        this.checkout.importedTaxes += taxValue;
      }
    }

    this.checkoutUpdated$.emit(this.checkout);
    return this.checkout.importedTaxes;
  }

  calculateCheckout(): Checkout {
    this.calculateSubTotal();
    this.calculateSalesTaxes();
    this.calculateImportedTaxes();
    this.calculateTotal();

    this.checkoutUpdated$.emit(this.checkout);
    return this.checkout;
  }
}
