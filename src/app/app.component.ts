import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fundamentos-eccomerce';
  imgText = 'https://www.w3schools.com/howto/img_avatar.png';



  onLoadedImage(img:string){
    console.log("Log desde el padre", img)
  }

}
