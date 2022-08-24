import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description:'',
    category: ''
  }

  dateAgo : Date = new Date('2020-08-14');

  @Output() addedProduct = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addedProduct.emit(this.product)
  }

}
