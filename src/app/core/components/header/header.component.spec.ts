import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { LOGIN_ROUTE, PERSONAL_AREA_ROUTE, SUPPORT } from 'src/app/constants/routes';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';
import { Observable, filter, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerSpy: { navigate : unknown, events: Observable<NavigationEnd> };

  beforeEach(async() => {
    routerSpy = { 
      navigate : jasmine.createSpy('navigate'), 
      events: of(new NavigationEnd(0, 'home', 'home')).pipe(filter(event => event instanceof NavigationEnd)) 
    };
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [ 
        LoginService,
        { provide: Router, useValue: routerSpy }
       ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const loginService = TestBed.inject(LoginService);
    const logOutSpy = spyOn(loginService, 'logout')
    component.logout();
    expect(logOutSpy).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith([LOGIN_ROUTE, {}]);
  });

  it('should change nav item selected', () => {
    component.changeNavItem('test');
    expect(component.navbarSelectedItem).toBe('test');
  });

    it('should navigate to personal area', () => {
    component.navigateToPersonalArea();
    expect(routerSpy.navigate).toHaveBeenCalledWith([PERSONAL_AREA_ROUTE, {}]);
  });

  it('should navigate to support area', () => {
    component.navigateToSupportPage();
    expect(routerSpy.navigate).toHaveBeenCalledWith([SUPPORT, {}]);
  });

  it('should set selected item to initial value', () => {
    component.navbarItems = [
      {
        title: 'menu.home',
        icon: 'ion-home',
        url: 'home'
      },
      {
        title: 'menu.accounts',
        icon: '',
        url: 'my-accounts'
      }
    ]
    component.ngOnInit();
    expect(component.navbarSelectedItem).toBe('menu.home');
  });

});
