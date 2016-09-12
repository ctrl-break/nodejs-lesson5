'use strict';

var mysql = require('mysql');

var init = require('./crud.js');

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

  let crudObj = new init.crud( connection, 'todos' );

  crudObj.create( connection, 'todos', {'text':'task 10', 'completed' : 'true'} );

  crudObj.read( ); // read all

  crudObj.update( {'text':'NEW task', 'completed' : 'false'}, 8 );

  crudObj.read( 8 ); // read where ID = 8

  crudObj.delete( 9 );
  crudObj.read( );

  connection.release();

});
