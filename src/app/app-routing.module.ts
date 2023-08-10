import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UserDetailComponent } from './features/components/user-detail/user-detail.component';
import { UserComponent } from './features/components/user/user.component';
import { HomeComponent } from './features/pages/home/home.component';



/**
 * Rutas securizadas
 */
const secureRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  /**
   * Consulta de usuarios
   */
  {
    path: 'users',
    component: UserComponent
  },
  /**
   * Creación de usuarios.
   */
  {
    path: 'users/create',
    component: UserDetailComponent
  },
  /**
   * Detalle de usuarios.
   */
  {
    path: 'users/:id',
    component: UserDetailComponent
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
   * Ruta main securizada.
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
