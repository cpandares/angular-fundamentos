import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fundamentos-eccomerce';
  imgText = 'https://www.w3schools.com/howto/img_avatar.png';

  constructor(
    private authService:AuthService,
    private userService:UsersService
  ){}

  onLoadedImage(img:string){
    console.log( img)
  }


  createUser(){
    this.userService.create({
      name:'cesar',
      email:'email@mail.com',
      password:'1234'
    })
    .subscribe(data =>{
      console.log(data)
    })
  }

  login(){
    this.authService.login('email@mail.com', '1234')
    .subscribe(data =>{
      console.log(data.access_token)
    })
  }

}
