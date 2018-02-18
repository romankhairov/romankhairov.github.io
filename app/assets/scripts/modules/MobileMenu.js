import $ from 'jquery';

class MobileMenu {
  constructor() {
      this.menuIcon = $(".site-header__menu-icon");
      this.content = $(".site-header__content");
      this.events();
    }

    events() {
      this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
      this.content.toggleClass("site-header__content--visible");
    }

  }

export default MobileMenu;
