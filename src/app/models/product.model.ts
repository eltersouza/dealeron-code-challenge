import { TaxHelper } from "../helpers/tax-helper";

export class Product {
    private helper: TaxHelper;

    id?: number;
    name: string;
    value: number;
    picture: string;
    isImported: boolean = false;
    isExemptFromTaxes: boolean = false;
    sellValue: number;

    constructor(name: string, value: number, picture: string, id?: number, isImported?: boolean, isTaxExempt?: boolean) {
        this.helper = new TaxHelper();

        this.name = name;
        this.value = value;
        this.picture = picture;


        if (id != null)
            this.id = id;

        if (isImported != null)
            this.isImported = isImported;

        if (isTaxExempt != null)
            this.isExemptFromTaxes = isTaxExempt;

        this.sellValue = this.helper.calculateSellValue(this);
    }
}