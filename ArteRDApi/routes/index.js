const todos = require('./todos');
const usuario = require('./usuarios');
const producto = require('./productos');
module.exports = [].concat(todos,usuario,producto);