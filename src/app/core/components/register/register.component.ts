import { Component, OnInit } from '@angular/core';

/**
 * Componente para la gestión del login.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
      // eslint-disable-next-line no-console
      console.log('Register page');
    }
}
