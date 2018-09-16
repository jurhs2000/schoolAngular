import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      //{ path: 'home', loadChildren: './content/landing/landing.module#LandingModule' },
      { path: '', loadChildren: './content/home/home.module#HomeModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
