import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { AdvertisementComponent } from '../../shared/components/advertisement/advertisement.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    AdvertisementComponent
  ]
})
export class LayoutModule { }
