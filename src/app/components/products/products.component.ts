import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  totalInShoppingCart = 0;

  myShoppingCart : Product[] = [];

  products: Product[] = [ ]

  constructor(
    private storeService:StoreService,
    private productService:ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(data => {
      this.products = data
    })

  }

  onAddToShoppingCart( product: Product ){

    /* this.myShoppingCart.push(product); */
    this.storeService.addProduct(product)

    this.totalInShoppingCart = this.storeService.getTotal()


  }

}
