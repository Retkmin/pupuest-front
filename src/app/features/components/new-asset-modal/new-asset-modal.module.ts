import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAssetModalComponent } from './new-asset-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewAssetModalComponent],
  exports: [NewAssetModalComponent],
  imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class NewAssetModalModule { }