module.exports.crud = function(conn, table) {

    this.connection = conn;
    this.tableName = table;

    this.create = (obj) => {
      let result = this.connection.query(`INSERT INTO ${this.tableName} SET ?;`, obj, function (err, info) {
          if (err)
            throw err;

      });
    }

    this.read = (condition) => {
      let query = `SELECT * FROM ${this.tableName}`;
      if (condition) query += ` WHERE \`id\` = ${condition}`;
      query += ";"
      console.log(query);
      let result = this.connection.query( query, function (err, rows) {
        if (err)
          throw err;
        console.log(rows);
      });
    }

    this.update = (obj, condition) => {
      let query = `UPDATE ${this.tableName} SET ?`;
      if (condition) query += ` WHERE \`id\` = ${condition}`;
      query += ";"
      let result = this.connection.query( query, obj, function (err, info) {
          if (err)
            throw err;
      });
    }

    this.delete = (condition) => {
      let query = `DELETE FROM ${this.tableName}`;
      if (condition) query += ` WHERE \`id\` = ${condition}`;
      query += ";"
      let result = this.connection.query( query, function (err, info) {
          if (err)
            throw err;
      });
    }
};
