import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let routerSpy: { navigate : unknown };

  beforeEach(async() => {
    routerSpy = { navigate : jasmine.createSpy('navigate')}
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
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
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const loginService = TestBed.inject(LoginService);
    const logOutSpy = spyOn(loginService, 'login')
    component.logout();
    expect(logOutSpy).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login', {}]);
  });

  it('should call collapse emiter when click collapse button', () => {
    const spyCollapse = spyOn(component.collapse, 'emit');
    component.collapseMenu();
    expect(spyCollapse).toHaveBeenCalled();
  });
});
