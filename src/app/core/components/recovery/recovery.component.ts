import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecoveryData } from '../../models/recoveryData';
import { RecoveryService } from '../../services/recovery/recovery.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  public recoveryData: RecoveryData = new RecoveryData();
  public userRecoveryForm: FormGroup = {} as FormGroup;
  public displayMsg = false;
  locale = 'es';
  constructor(
    private localeService: BsLocaleService,
    private router: Router,
    private fb: FormBuilder,
    private recoveryService: RecoveryService
  ) { 
    defineLocale('es', esLocale); 
  }

  ngOnInit(): void {
    this.localeService.use(this.locale);
    this.createForm();
  }

  private createForm() {
    this.userRecoveryForm = this.fb.group({
      user: ['', Validators.required],
    });
  }

  public register() {
    this.recoveryData.user =this.userRecoveryForm.get('user')?.value;
    this.recoveryService.recoveryAccount(this.recoveryData).subscribe(() => {
      this.displayMsg = true;
    })
  }

  public goBack(): void {
    this.router.navigate(['/login']);
  }
}
