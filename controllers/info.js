module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let homepageControllerCallback = (req, res) => {
    if(req.cookies.loggedin === undefined){
        res.redirect('/');
    }else{
        let userId = req.cookies.user_id;
        let ecoId = req.cookies.eco;
        let data = {
            food: null,
            exercise: null
        };

        var getInfo = (allFood) => {
            data.food = allFood;
            var getEx = (allExercises) => {
                data.exercise = allExercises;
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

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: homepageControllerCallback,
  };

}