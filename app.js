// Importar as configurações do Servidor
var app = require('./config/server');

// parametrizar a porta de escuta
// passo2 atribuir a variável server para passar como parâmetro no socket.io
var server = app.listen(80, function (){
    console.log('Servidor Online');
})

//importa o socket.io e passa onde irá escutar (server)
// inteligência para:
//receber tanto requisições http / websocket sejam recebidas e interpretadas
require('socket.io').listen(server);