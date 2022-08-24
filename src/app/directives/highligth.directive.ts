import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {

  constructor(
    private element : ElementRef
  ) {
      this.element.nativeElement.style.backgroundColor = 'red';
   }

}
