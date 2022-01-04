import { Product } from "../models/product.model";

export class TaxHelper {
    //Tax values in percentage.
    private basicSalesTax = 10;
    private importTax = 5;

    calculateSellValue(product: Product): number {
        let sellValue = 0;
        let taxValue = 0;

        taxValue = this.calculateTax(product);

        sellValue = product.value + taxValue;

        return sellValue;
    }

    calculateTax(product: Product): number {
        let taxValue = 0;

        if (product.isExemptFromTaxes) {
            if (product.isImported) {
                taxValue = (product.value * this.importTax) / 100;
            }
        } else {
            taxValue = (product.value * this.basicSalesTax) / 100;
            if (product.isImported) {
                taxValue = taxValue + ((product.value * this.importTax) / 100);
            }
        }

        taxValue = this.roundUp(taxValue, 1);
        return taxValue;
    }

    roundUp(number: number, precision: number) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }
}