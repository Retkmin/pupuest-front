import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OperativeComponent } from './operative.component';

const routes: Routes = [
  { path: '', component: OperativeComponent }
];

@NgModule({
  declarations: [OperativeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OperativeModule { }
