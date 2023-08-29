import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { MenuItem } from '../../models/menu';
import { LoginService } from '../../services/login.service';
import { MenuService } from '../../services/menu.service';
import { UserData } from '../../models/userData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() collapse: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  public userData: UserData = new UserData();
  public menuItems: MenuItem[] = [];

  constructor(private router: Router, private menuService: MenuService, private loginService: LoginService) { }

  ngOnInit() {
    this.menuService.getMenu().then((menuItems: MenuItem[]) => {
      this.menuItems = menuItems;
    });
    
    const currentUser = localStorage.getItem('current_user');
    const currentUserRol = localStorage.getItem('current_user_rol')
    if(currentUser !== null && currentUserRol !== null) {
      this.userData.userName = currentUser;
      this.userData.role = currentUserRol;
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  public collapseMenu() {
    this.collapse.emit(true);
  }

}
