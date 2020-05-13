import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.transform('uppercase');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.transform(null);
  }

  private transform(transform: string):void {
    this.el.nativeElement.style['text-transform'] = transform;
  }
}
