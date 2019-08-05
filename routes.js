const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

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
  const commentsControllerCallbacks = require('./controllers/comments')(allModels);



  app.get('/', usersControllerCallbacks.index);
  app.get('/register', usersControllerCallbacks.register);
  app.get('/home', infoControllerCallbacks.index);
  app.get('/setupecosystem', ecosystemControllerCallbacks.index);
  app.get('/addecosystem', ecosystemControllerCallbacks.addpage);
  app.get('/logout', usersControllerCallbacks.logout);
  app.get('/home/:id', infoControllerCallbacks.ownpage);
  app.get('/editfoodpost/:id', mealsControllerCallbacks.select);
  app.get('/editexercisepost/:id', exerciseControllerCallbacks.select);
  app.get('/showmealcomments/:id', commentsControllerCallbacks.showmeal);
  app.get('/showexercisecomments/:id', commentsControllerCallbacks.showEx);

  app.post('/home', usersControllerCallbacks.check);
  app.post('/welcome', usersControllerCallbacks.signup);
  app.post('/postmeal/success', upload.single('photo_url'), mealsControllerCallbacks.addmeal);
  app.post('/postexercise/success', upload.single('photo_url'), exerciseControllerCallbacks.addexercise);
  app.post('/addecosystem', ecosystemControllerCallbacks.addecosystem)
  app.post('/logintoecosystem', ecosystemControllerCallbacks.check)
  app.put('/editfoodpost/:id', upload.single('photo_url'), mealsControllerCallbacks.edit);
  app.delete('/deletefoodpost/:id', upload.single('photo_url'), mealsControllerCallbacks.delete)
  app.put('/editexercisepost/:id', exerciseControllerCallbacks.edit);
  app.delete('/deleteexercisepost/:id', exerciseControllerCallbacks.delete)
  app.post('/mealcomment/:id', commentsControllerCallbacks.add);
  app.post('/excomment/:id', commentsControllerCallbacks.addEx)

};