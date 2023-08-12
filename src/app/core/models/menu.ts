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
    title: 'menu.home',
    icon: 'ion-home',
    url: 'home'
  },
  {
    title: 'menu.fist-item',
    icon: '',
    url: ''
  },
  {
    title: 'menu.second-item',
    icon: '',
    url: ''
  },
  {
    title: 'menu.third-item',
    icon: '',
    url: ''
  },
  {
    title: 'menu.fourth-item',
    icon: '',
    url: ''
  },
  {
    title: 'menu.fifth-item',
    icon: '',
    url: ''
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
