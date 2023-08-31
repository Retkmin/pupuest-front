import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginData } from '../../models/loginData';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageData } from '../../models/localStorageData';
import { LocalStorageService } from '../../services/localStorageService/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginData: LoginData = new LoginData();
  public userLoginForm: FormGroup = {} as FormGroup;
  public storedLocalStorageData: LocalStorageData = new LocalStorageData();
  public hiddenCaptcha: boolean = true;
  public recaptchaSiteKey: string = environment.recaptcha.siteKeyV2;
  constructor(
    private router: Router, 
    private translate: TranslateService, 
    private toastr: ToastrService, 
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loginService.logout();
  }

  private createForm(): void { 
    this.userLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Realiza el login del usuario.
   */
  public login() {
    this.loginService.login(this.userLoginForm.get('username')?.value, this.userLoginForm.get('password')?.value).subscribe({
      next: (result: Response | {}) => {
        if (result) {
          /*this.userService.getUserData().subscribe((user: User) => {
            localStorage.setItem('current_user', JSON.stringify(user));
          });*/
          this.storedLocalStorageData.userProfile.userName = this.userLoginForm.get('username')?.value;
          this.storedLocalStorageData.settings.role = 'free';
          this.localStorageService.setItem('localStorageData', this.storedLocalStorageData.toJSON());
          this.router.navigate(['/']);
        } else {
          this.toastr.error(this.translate.instant('login.error.invalid-body'), this.translate.instant('login.error.invalid'));
        }
      },
      error: (error: Response) => {
        this.toastr.error(this.translate.instant('login.error.invalid-body'), this.translate.instant('login.error.invalid'));
      }
    });
  }

  resolved(captchaResponse: string) {
    console.warn(`Resolved captcha with response: ${captchaResponse}`);
  }

  public reCaptresetRecaptcha() {
    grecaptcha.reset();
  }
}
