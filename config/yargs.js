let descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea.'
};

let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea.'
}

const argv = require('yargs')
    .command('crear', 'Crea un tarea por hacer.', { descripcion })
    .command('actualizar', 'Cambia el estado a completado de una tarea.', {
        descripcion,
        completado
    })
    .command('eliminar', 'Elimina una tarea por hacer.', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}