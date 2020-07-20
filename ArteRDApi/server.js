
/*const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});




 
const init = async () => {
 
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
 

 //imagenes


init();




// create new server instance
const server = Hapi.Server({  
  host: 'localhost',
  port: 3000
})

async function init () {  
  await server.register({
    plugin: require('inert')
  })

  await server.start()
  console.log('Server started at: ' + server.info.uri)
}
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init()  

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
*/
const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const server = new Hapi.Server({
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'almacen_imagenes')
        },
        cors: true
    }
});

const init = async () => {

    await server.register(Inert);
    const routes = require('./routes');
server.route(routes);
 

    await server.start();

    console.log('Server running at:', server.info.uri);
};

init();