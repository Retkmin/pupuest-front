import { Component, OnInit } from '@angular/core';

/**
 * Componente que muestra el menú de la aplicación.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor() { }

  ngOnInit() {
    console.warn("Header Init");
  }

}
