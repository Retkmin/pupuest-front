import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Asset } from './model/asset';

@Component({
  selector: 'app-new-asset-modal',
  templateUrl: './new-asset-modal.component.html',
  styleUrls: ['./new-asset-modal.component.scss']
})

export class NewAssetModalComponent  implements OnInit {
  @Output() closeModal: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  @Output() saveAsset: EventEmitter<Asset> =
  new EventEmitter<Asset>();
  public asset: Asset = new Asset();
  public assetForm: FormGroup = {} as FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  
  private createForm() {
    this.assetForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  public goBack(): void {
    this.closeModal.emit(true);
  }

  public newAsset(): void {
    this.asset.name =this.assetForm.get('name')?.value;
    this.saveAsset.emit(this.asset);
  }

}
