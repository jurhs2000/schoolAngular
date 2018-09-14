import { Directive, AfterViewInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input('appCarousel') image: String;
  @Input('index') index: Number;

  ngAfterViewInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-image', "url('./assets/img/home/" + this.image + "')");
    setInterval(() => {
      console.log(this.index);
    }, 1000);
  }
}
