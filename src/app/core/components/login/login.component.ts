import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginData } from '../../models/loginData';

/**
 * Componente para la gestión del login.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginData: LoginData = new LoginData();
  public userLoginForm: FormGroup = {} as FormGroup;

  constructor(
    private router: Router, 
    private translate: TranslateService, 
    private toastr: ToastrService, 
    private loginService: LoginService,
    private userService: UserService,
    private formBuilder: FormBuilder
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
    this.loginService.login(this.loginData.userName, this.loginData.password).subscribe({
      next: (result: Response | {}) => {
        if (result) {
          /*this.userService.getUserData().subscribe((user: User) => {
            localStorage.setItem('current_user', JSON.stringify(user));
          });*/
          localStorage.setItem('current_user', this.loginData.userName);
          localStorage.setItem('current_user_rol', 'Free')
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
}
