import MenuMobile from "./modules/menu-mobile.js";
import ScrollTop from "./modules/scroll-top.js";
import ScrollDown from "./modules/scroll-down.js";

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const scrollTop = new ScrollTop("[data-arrow]", ".objetivos-container");
scrollTop.init();

const scrollDown = new ScrollDown(".setinha", ".scroll");
scrollDown.init();
