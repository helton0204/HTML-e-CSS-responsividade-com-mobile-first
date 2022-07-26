
const menuHamburguer = document.querySelector(".cabecalho__menu-hamburguer");
const botaoMenu = document.querySelector(".cabecalho__menu-hamburguer");
const menu = document.querySelector(".lista-menu");
const categorias = document.querySelector(".opcoes__item");
const menuTablet = document.querySelector(".lista-menu__desktop");

menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle("cabecalho__menu-hamburguer--ativo");
})

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("lista-menu__ativo");
})

categorias.addEventListener("click", () => {
    menuTablet.classList.toggle("lista-menu--ativo");
})