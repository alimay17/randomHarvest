import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

// more streamlined version
export class DropdownDirective {

  constructor() {}
  // properties
  @HostBinding('class.open') isOpen = false;

  // methods
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

}

// My version
// export class DropdownDirective {

//   constructor(private elRef: ElementRef, private renderer: Renderer2) {}
//   properties
//   dropStatus = false;

//   methods

//     if(!this.dropStatus){
//       this.renderer.addClass(this.elRef.nativeElement, 'open');
//       this.dropStatus = true;
//     }
//     else {
//       this.renderer.removeClass(this.elRef.nativeElement, 'open');
//       this.dropStatus = false;
//     }

//   }

// }
