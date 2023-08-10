import { Injectable } from '@angular/core';
import { UserData } from '../../models/userData';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

/**
 * Service to manage LocalStorage Data 
 */
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public userData: UserData =  new UserData();
  private userDataSubject = new BehaviorSubject<UserData>(new UserData());
  public userData$ = this.userDataSubject.asObservable();

  public setUserData(userData: UserData): void {
    const jsonUserDataValue = JSON.stringify(userData.value);
    this.userData = userData;
    localStorage.setItem(userData.key, jsonUserDataValue);
    this.userDataSubject.next(userData)
  }

  public getUserData(key: string): void {
    this.userData.key= key;
    this.userData.value = localStorage.getItem(key)
    this.userDataSubject.next(this.userData);
  }

  public cleanUserData(): void {
    this.userData =  new UserData();
    localStorage.clear();
    this.userDataSubject.next(this.userData);
  }

  public removeElementUserData(key: string): void {
    localStorage.removeItem(key);
    this.getUserData(key);
  }
}

