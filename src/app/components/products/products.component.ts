import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';
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

  showDetail : boolean = false;
  products: Product[] = [ ];

  limit:number = 10;
  offset:number = 0;

  statusRequest : 'loading' | 'success' | 'error' | 'init' = 'init'

  productChosen:Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    description:'',
    category: {
      id: '',
      name:''
    }
  }

  constructor(
    private storeService:StoreService,
    private productService:ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  ngOnInit(): void {
    this.loadMore()

  }

  onAddToShoppingCart( product: Product ){

    /* this.myShoppingCart.push(product); */
    this.storeService.addProduct(product)

    this.totalInShoppingCart = this.storeService.getTotal()


  }

  toggleDetailProduct(){
    this.showDetail = !this.showDetail;
  }

  onShowDetail(id:string){
    this.statusRequest = 'loading';
    this.toggleDetailProduct();
    this.productService.getProduct(id)
    .subscribe(data =>{

      this.productChosen = data;
      this.statusRequest = 'success';
    }, response =>{

      window.alert(response)
      this.statusRequest = 'error';
    })

  }

  create(){
    const product:CreateProductDTO = {
      title:'new Product',
      description: 'New product description',
      images:['https://placeimg.com/640/480/any?random=$%7BMath.random()'],
      price:1000,
      categoryId:2
    }
      this.productService.create(product)
      .subscribe(data =>{
        this.products.unshift(data)
      })
  }

  updateProduct (){

    const changes : UpdateProductDTO = {
      title:'Cambio Titulo'
    }
    const id = this.productChosen.id;
    this.productService.update(id, changes)
    .subscribe(data => {
      this.toggleDetailProduct();

      const productIndex = this.products.findIndex(item => item.id ===this.productChosen.id);

      this.products[productIndex] = data
    })

  }

  deleteProduct(){
    const id = this.productChosen.id;
    this.productService.delete(id)
    .subscribe(()=>{

      const productIndex = this.products.findIndex(item => item.id ===this.productChosen.id);
      this.products.splice(productIndex,1);
      this.toggleDetailProduct();
    })
  }

  loadMore(){
    this.productService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data)
      this.offset += this.limit
    })
  }

}
