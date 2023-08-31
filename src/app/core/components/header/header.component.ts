import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LocalStorageData } from '../../models/localStorageData';
import { LocalStorageService } from '../../services/localStorageService/localStorage.service';

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
  public userName: string= '';
  public storedLocalStorageData: LocalStorageData = new LocalStorageData();
  constructor(
    private router: Router,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.storedLocalStorageData = this.localStorageService.getItem('localStorageData');
    this.userName = this.storedLocalStorageData.userProfile.userName;
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
    this.router.navigate(['main/profile']);
  }

  public swapMenu(): void {
    this.toggleMenu.emit(true);
  }

}
