require("colors");
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquireMenu, pausa} = require('./helpers/inquirer');

console.clear();

const main = async () => {
    console.log("Hola Mundo");  

    let opt = '';

    do {
        opt = await inquireMenu();
        
        console.log({opt});
        await pausa();

    } while (opt !== '0' );

    
};

main();


