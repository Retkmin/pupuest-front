/**
 * Definición de un Item del menú.
 */
export class MenuItem {
    /**
     * Título del menú.
     */
    title: string;
    /**
     * Icono.
     */
    icon: string;
    /**
     * URL.
     */
    url: string;

    constructor(title: string, icon: string, url: string) {
      this.title = title;
      this.icon = icon;
      this.url = url;
    }
}

/**
 * Definición de los Items de menú
 */
export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'menu.fist-item',
    icon: 'bi bi-house',
    url: 'home'
  },
  {
    title: 'menu.second-item',
    icon: 'bi bi-person-gear',
    url: 'profile'
  },
  {
    title: 'menu.third-item',
    icon: 'bi bi-puzzle',
    url: 'operative'
  },
  {
    title: 'menu.fourth-item',
    icon: 'bi bi-graph-up',
    url: 'metrics'
  },
  {
    title: 'menu.fifth-item',
    icon: 'bi bi-gear',
    url: 'user-config'
  }
];

export const NAVBAR_ITEMS: MenuItem[] = [
  {
    title: 'nav-bar-items.fist-item',
    icon: 'ion-home',
    url: ''
  },
  {
    title: 'nav-bar-items.second-item',
    icon: '',
    url: ''
  },
  {
    title: 'nav-bar-items.third-item',
    icon: '',
    url: ''
  },
  {
    title: 'nav-bar-items.fourth-item',
    icon: '',
    url: ''
  },
  {
    title: 'nav-bar-items.fifth-item',
    icon: '',
    url: ''
  },
  {
    title: 'nav-bar-items.sixth-item',
    icon: '',
    url: ''
  }
];
