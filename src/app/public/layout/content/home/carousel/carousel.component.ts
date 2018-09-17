import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @ViewChild("item") item: ElementRef;

  carouselImages = [
    'download.jpg*',
    'dsfsf.jpg*',
    'images.jpg*'
  ];

  ngOnInit() {
  }

  /*ngAfterViewInit() {
    var contador = 0;
    setInterval(() => {
      this.renderer.setStyle(this.item.nativeElement, 'background-image', "url('./assets/img/home/" + this.carouselImages[contador] + "')");
      contador++;
    }, 5000);
  }*/

}
