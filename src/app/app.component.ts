import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fundamentos-eccomerce';
  imgText = 'https://www.w3schools.com/howto/img_avatar.png';
  token = '';
  imgUpload = '';

  constructor(
    private authService:AuthService,
    private userService:UsersService,
    private fileService: FilesService
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
      this.token = data.access_token
    });
  }

  getProfile ( ){
    this.authService.profile(this.token)
    .subscribe(data =>{
      console.log(data)
    })
  }

  dowonloadPdf(){
    this.fileService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }

  onUpload(event:Event){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file){
      this.fileService.uploadFiles(file)
      .subscribe(data=>{
        this.imgUpload = data.location
      })

    }
  }

}
