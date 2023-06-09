import inquirer from 'inquirer';
import colors from 'colors';
const pausaOpt = [{
        type: 'confirm',
        name: 'pause',
        message: `Press ${'Enter'.green} to continue`,
    }];
const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${colors.green('1')}. Bogo Sort`
            },
            {
                value: 2,
                name: `${'2'.green}. Divide and conquer`
            },
            {
                value: 0,
                name: `${'0'.green}. Stop`
            }
        ]
    }
];
const inquirerMenu = async () => {
    console.clear();
    console.log("==========================".green);
    console.log(" Seleccione una opcion ".white);
    console.log("==========================\n".green);
    const { opcion } = await inquirer.prompt(menuOpts);
    return opcion;
};
const leerInput = async (message) => {
    const question = [{
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }];
    const { desc } = await inquirer.prompt(question);
    return desc;
};
const pausa = async () => {
    console.log('\n');
    await inquirer.prompt(pausaOpt);
};
// const listarLugares = async(lugares = [])=>{
//     const choices = lugares.map((lugar,i)=>{
//         const idx = `${i+1}`.green;
//         return{
//             value: lugar.id,
//             name: `${idx} ${lugar.nombre}`
//         }
//     });
//     choices.unshift({
//         value: '0',
//         name: '0.'.green + 'Cancelar'
//     })
//     const preguntas = [{
//         type: 'list',
//         name: 'id',
//         messsage: 'Seleccione lugar?',
//         choices
//     }]
//     const {id} = await inquirer.prompt(preguntas);
//     return id;
// }
const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
};
// const  mostrarListadoCheckList = async(tareas = [])=>{
//     const choices = tareas.map((tarea,i)=>{
//         const idx = `${i+1}`.green;
//         return{
//             value: tarea.id,
//             name: `${idx} ${tarea.desc}`,
//             checked: (tarea.completadoEn)? true: false
//         }
//     });
//     const preguntas = [{
//         type: 'checkbox',
//         name: 'ids',
//         messsage: 'Selecciones?',
//         choices
//     }]
//     const {ids} = await inquirer.prompt(preguntas);
//     return ids;
// }
// export{
//     inquirerMenu,
//     pausa,
//     leerInput,
//     listarLugares,
//     confirmar,
//     mostrarListadoCheckList
// }
export { inquirerMenu, pausa, leerInput, confirmar, };
//# sourceMappingURL=inquirer.js.map