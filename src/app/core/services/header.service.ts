import { Injectable } from '@angular/core';
import { MenuItem, NAVBAR_ITEMS } from '../models/menu';

/**
 * Servicio para gestionar el menú de la aplicación.
 */
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  /**
   * Obtiene los datos del menú de la aplicación.
   * @returns Promesa con los datos del menú.
   */
  getNavBar(): Promise<MenuItem[]> {
    return Promise.resolve(NAVBAR_ITEMS);
  }
}

