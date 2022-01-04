import { NgIf } from '@angular/common';
import { Injectable } from '@angular/core';
import { TaxHelper } from '../helpers/tax-helper';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  private helper = new TaxHelper();
  constructor() { }

  //Tax values in percentage.
  private basicSalesTax = 10;
  private importTax = 5;

  calculateSellValue(product: Product): number {
    let sellValue = 0;
    let taxValue = 0;

    taxValue = this.helper.calculateTax(product);

    sellValue = product.value + taxValue;

    return sellValue;
  }

  calculateTax(product: Product): number{
    return this.helper.calculateTax(product);
  }
}
