import { EventEmitter, Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item.model";
import { Cart } from "../models/cart.model";
import { Product } from "../models/product.model";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: Cart = new Cart();
    public cartUpdated$!: EventEmitter<Cart>;

    constructor(private storage: StorageService){
        this.cartUpdated$ = new EventEmitter();
    }

    addItem(product: Product, quantity: number): void {
        let storageCart = this.storage.getCart();
        
        if(storageCart == null){
            this.cart = new Cart();
        } else {
            this.cart = storageCart;
        }

        let index = this.cart.items.findIndex((cart, idx, arr) => cart.product.id === product.id);
        if(index >= 0){
            quantity = this.cart.items[index].quantity + quantity;
            this.updateItem(product, quantity);
        } else {
            let item: CartItem = new CartItem(quantity, product);
            this.cart.items.push(item);
            this.storage.storeCart(this.cart);
            this.cartUpdated$.emit(this.cart);
        }

        this.storage.checkState();
    }

    removeItem(productId: number): void {
        let storageCart = this.storage.getCart();
        
        if(storageCart == null)
            return;

        this.cart = storageCart;
        this.cart.items = this.cart.items.filter((item, idx, arr) => item.product.id !== productId);
        this.storage.storeCart(this.cart);
        this.cartUpdated$.emit(this.cart);
        this.storage.checkState();
    }

    updateItem(product: Product, quantity: number): boolean {
        let storageCart = this.storage.getCart();
        
        if(storageCart == null)
            return false;

        let idx = this.cart.items.findIndex((item, idx, arr) => item.product.id === product.id);
        if(idx >= 0){
            this.cart.items[idx].product = product;
            this.cart.items[idx].quantity = quantity;
            this.storage.storeCart(this.cart);
            this.storage.checkState();
            this.cartUpdated$.emit(this.cart);
            return true;
        } else {
            return false;
        }
    }

    clearCart() {
        this.cart = new Cart();
        this.storage.clearCart();
        this.cartUpdated$.emit(this.cart);
    }

    getCart() {
        return this.storage.getCart();
    }
}