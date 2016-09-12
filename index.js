// Использование пула соединений
var mysql = require('mysql');

var commands = require('./crud.js');

// Настройка пула соединения
var connectionPool = mysql.createPool({
  host: 'localhost',
  database: 'les5db',
  user: 'root',
  password: '123',
});

// Получение соединения из пула
connectionPool.getConnection(function (err, connection) {
  if (err)
    throw err;

  //commands.create( connection, 'todos', {'text':'some task', 'completed' : 'false'} );

  commands.read( connection, 'todos');

  commands.update( connection, 'todos', {'text':'some NEW task', 'completed' : 'false'}, 'id=8');

  commands.read( connection, 'todos', 'id=8');

  //commands.delete( connection, 'todos', 'id=7' );

  connection.release();

});
