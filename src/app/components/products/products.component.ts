import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  totalInShoppingCart = 0;

  myShoppingCart : Product[] = [];

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/headphones_b_1.webp'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/headphones_b_2.webp'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/headphones_b_3.webp'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/headphones_b_4.webp'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart( product: Product ){

    this.myShoppingCart.push(product);

    this.totalInShoppingCart = this.myShoppingCart.reduce( ( sum , item ) => (sum + item.price) , 0)

  }

}
