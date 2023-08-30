// -------------- Modules --------------
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


// -------------- Services --------------
import { LoginService } from './core/services/login.service';
import { MenuService } from './core/services/menu.service';
import { UserService } from './core/services/user.service';
import { UserDataService } from './core/services/localStorage/userData.service';
import { ErrorService } from './core/services/errorService/error.service';

// -------------- Components --------------
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { MainComponent } from './core/components/main/main.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { PaginationComponent } from './core/components/pagination/pagination.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RecoveryComponent } from './core/components/recovery/recovery.component';

// -------------- Guards --------------
import { AuthGuard } from './core/guards/auth.guard';

// -------------- Interceptors --------------
import { OAuthInterceptor } from './core/interceptors/oauth-interceptor';
import { TokenizedInterceptor } from './core/interceptors/tokenized-interceptor';
import { ServerErrorInterceptor } from './core/interceptors/error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    MainComponent,
    MenuComponent,
    HeaderComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    PaginationModule.forRoot(),
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    NgSelectModule,
    BsDatepickerModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    MenuService,
    UserService,
    UserDataService,
    ErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenizedInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OAuthInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
