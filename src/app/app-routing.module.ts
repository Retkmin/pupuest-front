import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './core/components/register/register.component';
import { RecoveryComponent } from './core/components/recovery/recovery.component';
import { Observable, of } from 'rxjs';


class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const routeData = route.data as { preload: boolean };
    return routeData && routeData.preload ? load() : of(null);
  }
}

/**
 * Secure routes
 */
const secureRoutes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./features/pages/home/home.module').then(mod => mod.HomeModule), data: { preload: true } 
  },
  { 
    path: 'diary',
    loadChildren: () => import('./features/pages/diary/diary.module').then(mod => mod.DiaryModule), data: { preload: true } 
  },
  { 
    path: 'metrics',
    loadChildren: () => import('./features/pages/metrics/metrics.module').then(mod => mod.MetricsModule), data: { preload: true } 
  },
  { 
    path: 'operative',
    loadChildren: () => import('./features/pages/operative/operative.module').then(mod => mod.OperativeModule), data: { preload: true } 
  },
  { 
    path: 'profile',
    loadChildren: () => import('./features/pages/profile/profile.module').then(mod => mod.ProfileModule) 
  },
  { 
    path: 'user-configuration',
    loadChildren: () => import('./features/pages/user-configuration/user-configuration.module').then(mod => mod.UserConfigurationModule) 
}
];

const routes: Routes = [
 {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: secureRoutes
  },
  {
      path: '**',
      redirectTo: 'main/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: CustomPreloadingStrategy
    })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
