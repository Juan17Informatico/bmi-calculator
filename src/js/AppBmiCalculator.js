import home from "../views/home.html?raw";


/**
 * Función que inicia toda la aplicación
 * @param {HTMLDivElement} app Div Element
 */
export const AppBmiCalculator = ( app ) => {

    app.innerHTML = home; 

}