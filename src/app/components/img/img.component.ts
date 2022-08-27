import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() imgText:string = '';
  @Output() imageLoaded  = new EventEmitter<string>();

  imgDefault = './assets/images/headphones_b_1.webp'

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.imgText = this.imgDefault
  }

  imgLoaded(){

    this.imageLoaded.emit(this.imgText)
  }

}
