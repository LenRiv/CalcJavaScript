
//Seleccionar elementos de HTML.//

//Visor de la calculadora
const display = document.querySelector("#box");
//Seleccionar todos los botones
const allButtons = document.querySelectorAll("button");
//Interruptor tema oscuro
const activeSwitch = document.querySelector(".toggle__switch");
//Contenedor principal 
const calculator = document.querySelector(".calculator");


//Dar funcionalidad a la calculadora//

//Recorrer todos los botones 
allButtons.forEach((item) => {
  item.onclick = () => {

    //Limpiar la pantalla
    if (item.id == "clear") {
      display.innerText = "";

    //Condicion para control del boton de borrado uno a uno
    } else if (item.id == "back") {
      let string = display.innerText.toString();
      display.innerText = string.substring(0, string.length - 1);

    //Metodo eval() para control de operaciones
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);

    //Para controlar errores del boton
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""), 1000);

    } else {
    //Añadir interaccion de botones
      display.innerText += item.id;
    }
  };
});


//Modo oscuro
let isDark = true;//Empieza en true/verdadero

activeSwitch.onclick = () => {
  calculator.classList.toggle("dark");//Inicia todo el tema dark
  activeSwitch.classList.toggle("active");//Estado inicial
  isDark = !isDark;//Cambia a false/falso y vuelve al estado inicial

};