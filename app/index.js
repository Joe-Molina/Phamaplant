import hamburgerMenu from "./menu_hamburguesa.js";
import Responsive from "./responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    Responsive()
})