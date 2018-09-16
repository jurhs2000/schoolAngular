import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes  = [
  { path: '', loadChildren: './public/layout/layout.module#LayoutModule' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
