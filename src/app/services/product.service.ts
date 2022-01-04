import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product("Book", 12.49,"https://img.elo7.com.br/product/original/162DE0F/old-book-marrom-caderno-artesanal-secreto.jpg", 1, false, true),
    new Product("Music CD", 14.99,"https://universalmusic.vteximg.com.br/arquivos/ids/166760-1000-1000/Abba-Voyage-CD-Standard.png?v=637662084390830000", 2),
    new Product("Chocolate bar", 0.85,"http://cdn.shopify.com/s/files/1/0561/1179/2335/products/Website_Template_product_page_CB_Creamy_Milk_ff68813c-088c-43ff-a5a6-1dd59aed3600_grande.jpg?v=1626975895", 3, false, true),
    new Product("Box of Chocolate", 10.00,"https://p.turbosquid.com/ts-thumb/w5/Mk24nS/W6/00383_chocolate_box_surface_v002_01_preview.0000/jpg/1610386466/600x600/fit_q87/c78a753be6a95957046a96d55359fb75d50c1bf1/00383_chocolate_box_surface_v002_01_preview.0000.jpg", 4, true, true),
    new Product("Bottle of perfume", 47.50,"https://envato-shoebox-0.imgix.net/6bb9/ee2f-d3bc-44ee-aa8b-128940e4bef6/Classic+perfume+bottle+on+white.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=7f859835a50f9e2df23b7e4a1d5446be", 5, true),
    new Product("Bottle of perfume", 27.99,"https://st.depositphotos.com/1408467/3650/v/950/depositphotos_36507573-stock-illustration-perfume-bottle.jpg", 6, true),
    new Product("Bottle of perfume", 18.99,"https://media.istockphoto.com/photos/transparent-perfume-bottle-isolated-on-white-picture-id144318776?b=1&k=20&m=144318776&s=170667a&w=0&h=cAhayj5ewSjCWH6prIODLv9T0PLQLRs3VaXyrwxQjSY=", 7),
    new Product("Box of chocolates", 11.25,"https://http2.mlstatic.com/D_NQ_NP_613657-MLB28063974280_082018-O.jpg", 8, true, true),
    new Product("Packet of headache pills", 9.75,"https://images.everydayhealth.com/images/home-remedies-for-headache-relief-alt-01-722x406.jpg?w=720", 9, false, true)
  ];

  constructor() { }

  getAll(): Product[]{
    return this.products;
  }

  getById(productId: number): Product | undefined {
    let product = this.products.find((prd, idx, arr) => prd.id === productId);
    return product;
  }
}
