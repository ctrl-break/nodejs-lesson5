
module.exports.create = ( connection, tableName, obj) => {
  let result = connection.query(`INSERT INTO ${tableName} SET ?;`, obj, function (err, info) {
      if (err)
        throw err;

  });
}

module.exports.read = (connection, tableName, condition) => {
  let query = `SELECT * FROM ${tableName}`;
  if (condition) query += ` WHERE ${condition}`;
  query += ";"
  let result = connection.query( query, function (err, rows) {
    if (err)
      throw err;
    console.log(rows);
  });
}

module.exports.update = (connection, tableName, obj, condition) => {
  let query = `UPDATE ${tableName} SET ?`;
  if (condition) query += ` WHERE ${condition}`;
  query += ";"
  let result = connection.query( query, obj, function (err, info) {
      if (err)
        throw err;
  });
}

module.exports.delete = (connection, tableName, condition) => {
  let query = `DELETE FROM ${tableName}`;
  if (condition) query += ` WHERE ${condition}`;
  query += ";"
  let result = connection.query( query, function (err, info) {
      if (err)
        throw err;
  });
}
