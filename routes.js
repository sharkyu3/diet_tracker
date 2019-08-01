module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const usersControllerCallbacks = require('./controllers/users')(allModels);
  const infoControllerCallbacks = require('./controllers/info')(allModels);
  const mealsControllerCallbacks = require('./controllers/meals')(allModels);
  const exerciseControllerCallbacks = require('./controllers/exercise')(allModels);
  const ecosystemControllerCallbacks = require('./controllers/ecosystem')(allModels);



  app.get('/', usersControllerCallbacks.index);
  app.get('/login', usersControllerCallbacks.setlogin);
  app.get('/register', usersControllerCallbacks.register);
  app.get('/home', infoControllerCallbacks.index);
  app.get('/postmeal', mealsControllerCallbacks.index);
  app.get('/postexercise', exerciseControllerCallbacks.index);
  app.get('/setupecosystem', ecosystemControllerCallbacks.index);
  app.get('/home/:id', infoControllerCallbacks.ownpage);
  app.get('/editfoodpost/:id', mealsControllerCallbacks.select);
  app.get('/editexercisepost/:id', exerciseControllerCallbacks.select);

  app.post('/home', usersControllerCallbacks.check);
  app.post('/welcome', usersControllerCallbacks.signup);
  app.post('/postmeal/success', mealsControllerCallbacks.addmeal);
  app.post('/postexercise/success', exerciseControllerCallbacks.addexercise);
  app.post('/addecosystem', ecosystemControllerCallbacks.addecosystem)
  app.put('/editfoodpost/:id', mealsControllerCallbacks.edit);
  app.delete('/deletefoodpost/:id', mealsControllerCallbacks.delete)
  app.put('/editexercisepost/:id', exerciseControllerCallbacks.edit);
  app.delete('/deleteexercisepost/:id', exerciseControllerCallbacks.delete)

};