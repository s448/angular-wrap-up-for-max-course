import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterDirectiveDirective implements OnInit {
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue'; 

  ngOnInit(): void {
   // this.backgroundColor = 'yellow'
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor);
  }
  @HostListener('mouseleave') mouseout(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

}
