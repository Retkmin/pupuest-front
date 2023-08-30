import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserRegisterData } from '../../models/userResgister';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  checkUsername(nickName: string): Observable<boolean> {
    //TODO: Add api call to check username when API is available
    console.warn(`${nickName} is available`);
    return of(true);
  }

  checkEmail(nickName: string): Observable<boolean> {
    //TODO: Add api call to check username when API is available
    console.warn(`${nickName} is available`);
    return of(true);
  }

  registerNewUser(userRegisterData: UserRegisterData) {
      //TODO: Add api call to register when API is available
      console.warn(`Name: ${userRegisterData.name}`);
      console.warn(`Surname: ${userRegisterData.surname}`);
      console.warn(`UserName: ${userRegisterData.userName}`);
      console.warn(`Email: ${userRegisterData.email}`);
      console.warn(`Birthdate: ${userRegisterData.birthdate}`);
      return of(true);
  }
}

