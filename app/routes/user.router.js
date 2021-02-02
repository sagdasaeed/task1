const { authJwt } = require("../middleware");
const controller = require("../controllers/controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
};
   /* // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
   */
   

 
 /*const users = require('./users/controller.js');

module.exports = function (app) {
    app.get('/user/list', users.list);
  
    app.post('/user/insert', users.insert);
  
    app.post('/user/ins', users.ins);

    app.post('/user/update', users.update);
  
    app.post('/user/delete', users.delete);

};
*/