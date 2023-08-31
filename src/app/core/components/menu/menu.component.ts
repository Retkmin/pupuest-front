import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { MenuItem } from '../../models/menu';
import { LoginService } from '../../services/login.service';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../services/localStorageService/localStorage.service';
import { LocalStorageData } from '../../models/localStorageData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() collapse: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  public menuItems: MenuItem[] = [];
  public userDataSubscription: Subscription = new Subscription();
  public localStorageData: LocalStorageData = new LocalStorageData();
  constructor(
    private router: Router,
    private menuService: MenuService,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,) { }

  ngOnInit() {
    this.menuService.getMenu().then((menuItems: MenuItem[]) => {
      this.menuItems = menuItems;
    });
    this.localStorageData = this.localStorageService.getItem('localStorageData');
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  public collapseMenu() {
    this.collapse.emit(true);
  }

}
