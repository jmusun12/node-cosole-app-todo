let argv = require('./config/yargs').argv;
let colors = require('colors');
let porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========Por hacer======='.green);
            console.log('Descripcion: ', tarea.descripcion);
            console.log('Completado', tarea.completado);
            console.log('========================'.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;
    case 'eliminar':
        let eliminado = porHacer.borrar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}