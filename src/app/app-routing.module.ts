import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/pages/home/home.component';
import { ProfileComponent } from './features/pages/profile/profile.component';
import { MetricsComponent } from './features/pages/metrics/metrics.component';
import { UserConfigurationComponent } from './features/pages/user-configuration/user-configuration.component';
import { OperativeComponent } from './features/pages/operative/operative.component';



/**
 * Secure routes
 */
const secureRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'metrics',
    component: MetricsComponent
  },

  {
    path: 'user-config',
    component: UserConfigurationComponent
  },
  {
    path: 'operative',
    component: OperativeComponent
  }
];

const routes: Routes = [
/**
 * Login
 */
 {
    path: 'login',
    component: LoginComponent
  },

  /**
   * Main secure routes
   */
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: secureRoutes
  },

  // otherwhise redirect to main
  {
      path: '**',
      redirectTo: 'main/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
