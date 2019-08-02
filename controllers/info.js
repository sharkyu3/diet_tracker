module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  var sha256 = require('js-sha256');
  const SALT = "NOM NOM CHOMP CHOMP";

  let homepageControllerCallback = (req, res) => {
    if(req.cookies.loggedin === undefined){
        res.redirect('/');
    }else if(req.cookies.loggedin === sha256(req.cookies.user_id + SALT)){
        let userId = req.cookies.user_id;
        let ecoId = req.cookies.eco;
        let data = {
            food: null,
            exercise: null,
            user_id: userId
        };

        var getInfo = (allFood) => {
            data.food = allFood.reverse();
            var getEx = (allExercises) => {
                data.exercise = allExercises.reverse();
                // once done, render
                res.render('homepage', data);
            }
            // once done, get exercises
            db.info.getAllExercises(getEx, ecoId);
        };
        // get food first
        db.info.getAllMeals(getInfo, ecoId);
    }
  };

  let ownpageControllerCallback = (req, res) => {
    if(req.cookies.loggedin === undefined){
        res.redirect('/');
    }else{
        let userId = req.params.id;
        let data = {
            food: null,
            exercise: null,
        };

        var getInfo = (allFood) => {
            data.food = allFood.reverse();
            var getEx = (allExercises) => {
                data.exercise = allExercises.reverse();
                // once done, render
                res.render('ownpage', data);
                console.log("controller for info");
                console.log(data);
            }
            // once done, get exercises
            db.info.getUserExercises(getEx, userId);
        };
        // get food first
        db.info.getUserMeals(getInfo, userId);
    }
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: homepageControllerCallback,
    ownpage: ownpageControllerCallback,
  };

}