import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  checkUsername(nickName: string): Observable<boolean> {
    //TODO: Add api call to check username when API is available
    console.warn(`${nickName} is available`);
    return of(true);
  }
}

