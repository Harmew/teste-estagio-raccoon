import MenuMobile from "./modules/menu-mobile.js";
import ScrollTop from "./modules/scroll-top.js";

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const scrollTop = new ScrollTop("[data-arrow]", ".objetivos-container");
scrollTop.init();
