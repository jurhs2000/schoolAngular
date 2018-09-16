import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }
