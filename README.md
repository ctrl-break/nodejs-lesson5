#Lesson 5

Создать свою модель CRUD (create-read-update-delete)  

![Image of CRUD](http://radzserg.com/wp-content/uploads/2016/04/mongodb-crud-operations1.png)

**Usage**  
```javascript
    var init = require('./crud.js');  

    // connection - mysql module connection  
    let crudObj = new init.crud( connection, 'tableName' );  

    // create ( obj )  
    crudObj.create( {'text':'task 10', 'completed' : 'true'} );  

    // read all  
    crudObj.read( );  

    // update ( newObj, condition)  
    // condition is id number  
    crudObj.update( {'text':'NEW task', 'completed' : 'false'}, 8 );  

    // read where id = 8  
    crudObj.read( 8 );  

    // delete where id = 10  
    crudObj.delete( 10 );   
```
