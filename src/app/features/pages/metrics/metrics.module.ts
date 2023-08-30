import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MetricsComponent } from './metrics.component';

const routes: Routes = [
  { path: '', component: MetricsComponent }
];

@NgModule({
  declarations: [MetricsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MetricsModule { }
