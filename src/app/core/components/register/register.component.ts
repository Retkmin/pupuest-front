import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/resgister/register.service';
/**
 * Componente para la gestión del login.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  locale = 'es';
  public nickNameStates = {
    active: 1,
    inactive: 2,
    neutral: 3
  }    

  public usernameAvailable = this.nickNameStates.neutral;
  constructor(
    private registerService: RegisterService,
    private localeService: BsLocaleService,
    private router: Router
  ) { defineLocale('es', esLocale); }

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
  
  public checkNickName(): void {
    this.registerService.checkUsername(this.model.nickName).subscribe((nickState: boolean) =>{
      if(nickState) {
        this.usernameAvailable = this.nickNameStates.active;
      } else {
        this.usernameAvailable = this.nickNameStates.inactive;
      }
    });
    
  }
}
