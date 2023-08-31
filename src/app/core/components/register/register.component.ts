import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/resgisterService/register.service';
import { UserRegisterData } from '../../models/userResgister';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Componente para la gestión del login.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userRegisterData: UserRegisterData = new UserRegisterData();
  public userRegisterForm: FormGroup = {} as FormGroup;
  public nickNameStates = {
    active: 1,
    inactive: 2,
    neutral: 3
  }
  public emailStates = {
    active: 1,
    inactive: 2,
    neutral: 3
  } 
  locale = 'es';   

  public usernameAvailable = this.nickNameStates.neutral;
  public emailAvailable = this.nickNameStates.neutral;
  constructor(
    private registerService: RegisterService,
    private localeService: BsLocaleService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    defineLocale('es', esLocale);
   }

  ngOnInit(): void {
    this.localeService.use(this.locale);
    this.createForm();
  }
  
  private createForm() {
    this.userRegisterForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      companyCondition: [false, Validators.requiredTrue],
      legalCondition: [false, Validators.requiredTrue],
      protectionCondition: [false, Validators.requiredTrue]
    });
  }

  public register() {
    this.setUserRegisterFormData();
    this.registerService.registerNewUser(this.userRegisterData).subscribe(user => {
      if (user) { 
        this.router.navigate(['/login']);
      }
    });
  }

  public goBack(): void {
    this.router.navigate(['/login']);
  }
  
  public checkNickName(): void {
    const username = this.userRegisterForm.get('user')?.value;
    if (username === '') { 
      this.usernameAvailable = this.nickNameStates.neutral;
    } else {
      this.registerService.checkUsername(username).subscribe((nickState: boolean) =>{
        if(nickState) {
          this.usernameAvailable = this.nickNameStates.active;
        } else {
          this.usernameAvailable = this.nickNameStates.inactive;
        }
      });
    }
  }

  public checkEmail(): void { 
    const email = this.userRegisterForm.get('email')?.value;
    if (email === '') { 
      this.emailAvailable = this.emailStates.neutral;
    } else {
      this.registerService.checkEmail(email).subscribe((emailState: boolean) =>{
        if(emailState) {
          this.emailAvailable = this.emailStates.active;
        } else {
          this.emailAvailable = this.emailStates.inactive;
        }
      });
    }
  }

  private setUserRegisterFormData(): void { 
    this.userRegisterData.name = this.userRegisterForm.get('name')?.value;
    this.userRegisterData.surname = this.userRegisterForm.get('surname')?.value;
    this.userRegisterData.userName = this.userRegisterForm.get('user')?.value;
    //this.userRegisterData.roleCode =this.userRegisterForm.get('userName')?.value;
    this.userRegisterData.email = this.userRegisterForm.get('email')?.value;
    this.userRegisterData.birthdate = this.userRegisterForm.get('birthday')?.value;
    ///this.userRegisterData.language =this.userRegisterForm.get('userName')?.value;
    //this.userRegisterData.currency =this.userRegisterForm.get('userName')?.value;
    this.userRegisterData.companyCondition = this.userRegisterForm.get('companyCondition')?.value;
    this.userRegisterData.legalCondition = this.userRegisterForm.get('legalCondition')?.value;
    this.userRegisterData.protectionCondition = this.userRegisterForm.get('protectionCondition')?.value;

  }
}
