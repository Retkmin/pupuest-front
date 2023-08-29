import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

/**
 * Componente que muestra el menú de la aplicación.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() toggleMenu: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  public username: string= '';
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    const currentUser = localStorage.getItem('current_user')
    if(currentUser !== null) {
      this.username = currentUser;
    }
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  public goHome(): void {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

  public goProfile(): void {
    this.loginService.logout();
    this.router.navigate(['/profile']);
  }

  public swapMenu(): void {
    this.toggleMenu.emit(true);
  }

}
