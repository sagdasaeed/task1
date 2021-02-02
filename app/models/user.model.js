module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cridt: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      repass: {
        type: Sequelize.STRING
      
      }
    });
  
    return users;
  };

/*const pool = require('../../config/db');
const responseHandler = require('../../config/response.handler').handleResponse;
const response = require('../../config/response.handler').Response;
const { validateResponse } = require('../../config/response.handler');
var session = require('express-session');
var path = require('path');
var mysql = require('mysql');


       if (err) {
                    return reject(response(500, "db error" + err, {}));
                    res.json({
                      status:false,
                      message:'there are some error with query'
                      })
                }else{
                  if(results.length >0){
                      if(pass==results[0].pass){
                          res.json({
                              status:true,
                              message:'successfully authenticated'
                          })
                      }else{
                          res.json({
                            status:false,
                            message:"Email and password does not match"
                           });
                      }
                   
                  }
                  else{
                    res.json({
                        status:false,    
                      message:"Email does not exits"
                    });
                  }
                }
              });
          }  
        });
    }
                




exports.list = (req, res) => { 

    const sql = 'select * from sign';


   return new Promise((resolve, reject) => {
        pool.query(sql, [], (result, err) => { 
            if (err)
                return reject(response(500, "db error" + err, {}));
            return resolve(response(200, "success", {result}))

        })


   });
    
    


}


exports.list = (req, res) => { 

    const sql = 'select * from users';


    return new Promise((resolve, reject) => {
        pool.query(sql, [], (result, err) => {
            if (err)
                return reject(response(500, "db error" + err, {}));
            return resolve(response(200, "success", { result }))

        })

    });

}

 

exports.insert = (req, res) => {
    
    const sql = 'insert into sign (fname,lname,email,pass,repass) values (?,?,?,?,?)';
    let fname  = req.body.fname;
    let lname  = req.body.lname;
    let email  = req.body.email;
    let pass   =req.body.pass;
    let repass = req.body.repass;
    
    return new Promise((resolve, reject) => {
        pool.query(sql,[fname,lname,email,pass,repass], (result, err) => { 
            if (pass===repass){
          if (err)
                return reject(response(500, "db error" + err, {}));
              
            return resolve(response(200, "success", { result }))
}  throw new Error('password must be same')
      });
  
    });
   
};

 


	

 exports.ins = (req, res) => {
         fname = req.body.fname;
         pass = req.body.pass;
        return new Promise((resolve, reject) => {
        if (fname && pass ) {
            pool.query('SELECT * FROM sign WHERE fname = ? AND pass = ?', [fname, pass],(err, results) => {      
                if (err) {
                    console.log(results)
                   // res.send('Incorrect Username and/or Password!');
                    return reject(response(500, "db error" + err, {}));
                  
                } else {
                    req.session.loggedin = true;
                    req.session.fname = fname;
                    res.redirect('/home.html');
                    //return resolve(response(200, "success", { result }))
                }			
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
 });
}
    












exports.update = (req, res) => { 

    const sql = 'update sign set lname=?,  where fname=?';

    let name = req.session.fname;
    let id = req.session.lname;
        pool.query(sql, [fname, lname], (result, err) => {
            if (err)
                return reject(response(500, "db error" + err, {}));
            return resolve(response(200, "success", { result }))

        });

}



exports.delete = (req, res) => { 

    const sql = 'delete from sign where fname=?';

    let id = req.session.fname;

    return new Promise((resolve, reject) => {
        pool.query(sql, [id], (result, err) => {
            if (err)
                return reject(response(500, "db error" + err, {}));
            return resolve(response(200, "success", { result }))

        })

    });
}
*/