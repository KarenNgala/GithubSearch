import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    this.textDeco("underline")
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }


}
