import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';


describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let elementRef : ElementRef<HTMLElement>;

  beforeEach(() => {
    elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
    directive = new HighlightDirective(elementRef)
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should transform to uppercase', () => {
    directive.onMouseEnter();
    expect(elementRef.nativeElement.style.textTransform).toEqual('uppercase');
  });

  it('should reset transform', () => {
    directive.onMouseEnter();
    directive.onMouseLeave();
    expect(elementRef.nativeElement.style.textTransform).toBeFalsy();
  });
});
