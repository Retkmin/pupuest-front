import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DiaryComponent } from './diary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewAssetModalModule } from '../../components/new-asset-modal/new-asset-modal.module';

const routes: Routes = [
  { path: '', component: DiaryComponent }
];

@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    NewAssetModalModule
  ]
})
export class DiaryModule { }
