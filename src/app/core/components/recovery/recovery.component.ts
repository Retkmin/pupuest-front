import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
import { Router } from '@angular/router';
/**
 * Componente para la gestión del login.
 */
@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  model: any = {};
  locale = 'es';
  constructor(private localeService: BsLocaleService, private router: Router) { defineLocale('es', esLocale); }

  ngOnInit(): void {
    this.localeService.use(this.locale);
  }

  public register() {
    // call register service
    this.router.navigate(['/login']);
  }

  public goBack(): void {
    this.router.navigate(['/login']);
  }
}
