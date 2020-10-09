const todos = require('./todos');
const usuario = require('./usuarios');
const producto = require('./productos');
const login = require('./login');
module.exports = [].concat(todos,usuario,producto,login);