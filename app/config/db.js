module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "charity",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
/*
const mysql = require('mysql');


//mysql port 3306
const pool = mysql.createPool({

  host: 'localhost',
  user: 'root',
  password: '',
  database: 'facebook',
  port: 3306,
  
  timezone: 'utc',
  multipleStatements: true,
});
//

// module.exports = pool;

var DB = (function () {
  function _query(query, params, callback) {
    pool.getConnection(function (err, connection) {
      if (err) {
        //console.log(err);
        connection.release();
        callback(null, err);
        throw err;
      }

      connection.query(query, params, function (err, rows) {
        //connection.release();
        if (!err) {
          connection.commit();
          connection.release();
          callback(rows);
        } else {
          connection.rollback();
          connection.release();
          //console.log(err);
          callback(null, err);
        }
      });

      connection.on('error', function (err) {
        console.log(err);
        connection.release();
        callback(null, err);
        throw err;
      });
    });
  }

  return {
    query: _query,
  };
})();

module.exports = DB;
*/