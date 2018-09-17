import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { GlobalService } from '../../utils/global.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private globalService: GlobalService
  ) { }
  
  @ViewChild('advertisement') advertisement: ElementRef
  title: String
  description: String

  ngOnInit() {
  }

  showAdertisement(type: String, title: String, description: String) {
    this.title = title
    this.description = description
    this.renderer.addClass(this.advertisement.nativeElement, "show")
  }

}
