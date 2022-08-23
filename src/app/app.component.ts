import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundamentos-eccomerce';
  name = 'Cesar';
  age = 25;
  /* btnDisabled = this.age < 18 ? true : false; */
  btnDisabled = true;

  names :string[] = ['cesar', 'enrique', 'manuel'];
  newName : string = '';


  register = {
    name:'',
    email:'',
    password:''
  }


  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/headphones_b_1.webp',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/headphones_b_2.webp'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/headphones_b_3.webp'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/headphones_b_4.webp'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/headphones_b_3.webp'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/headphones_c_1.webp'
    }
  ]


  toggleButton(){

    this.btnDisabled = !this.btnDisabled;
  }

  agetIncrement(){
      this.age += 1
  }

  addName (){
    this.names.push(this.newName);
    this.newName= ''
  }

  deleteName(index:number){
    this.names.splice(index, 1)
  }

  onRegister(){
    console.log(this.register)
  }

}
