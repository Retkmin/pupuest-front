import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuItem } from '../../models/menu';
import { LoginService } from '../../services/login.service';
import { HeaderService } from '../../services/header.service';

/**
 * Componente que muestra el menú de la aplicación.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  /**
   * Items del menú de la aplicación.
   */
  public navbarSelectedItem: string = '';
  public navbarItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.headerService.getNavBar()
      .then((navbarItems: MenuItem[]) => {
        this.navbarItems = navbarItems;
        this.navbarSelectedItem = navbarItems[0].title;
      });
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
        this.setSelectedItem(event);
      });
  }

  private setSelectedItem(event: any) {
    this.navbarSelectedItem = this.navbarItems[0].title;
    for (let i = 0, len = this.navbarItems.length; i < len; i++) {
      const menuItem = this.navbarItems[i];
      if(event.url.includes(menuItem.url)){
        this.navbarSelectedItem = menuItem.title;
      }
    }
  }

}
