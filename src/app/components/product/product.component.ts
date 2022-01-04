import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

declare var bootstrap: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input("item") product!: Product;
  productForm!: FormGroup;
  submitted = false;

  constructor(private cartService: CartService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      quantity: ['0', [Validators.required, Validators.min(1)]]
    });
  }

  minusClick(): void {
    let quantity = this.productForm.getRawValue().quantity;
    quantity = Number(quantity) == 0 ? 0 : Number(quantity) - 1
    this.productForm.setValue({quantity: quantity});
  }

  plusClick(): void {
    let quantity = this.productForm.getRawValue().quantity;
    quantity = Number(quantity)+1;
    this.productForm.setValue({quantity: quantity});
  }

  quantityBlur(evt: any): void {
    let val: number = Number(evt.target.value);
    val = val < 0 ? 0 : val;
    this.productForm.setValue({quantity: val});
  }

  get f(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }

  addToCart() {
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    let quantity = Number(this.productForm.getRawValue().quantity);
    this.cartService.addItem(this.product, quantity);
    this.productForm.setValue({'quantity':'0'});
    this.submitted = false;
  }
}