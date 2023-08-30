import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserConfigurationComponent } from './user-configuration.component';

const routes: Routes = [
  { path: '', component: UserConfigurationComponent }
];

@NgModule({
  declarations: [UserConfigurationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserConfigurationModule { }
