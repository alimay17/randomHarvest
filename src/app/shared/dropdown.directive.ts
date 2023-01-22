import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // properties
  dropStatus = false;


  // methods
  @HostListener('click') toggleDropdown() {
    if(!this.dropStatus){
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.dropStatus = true;
    }
    else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.dropStatus = false;
    }

  }

}
