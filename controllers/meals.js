module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let addMealControllerCallback = (req, res) => {
    res.render('addmeal');
  };

  let postMealControllerCallback = (req, res) => {
    console.log("inside post meal controller");
    console.log(req.cookies.user_id);
    let userId = req.cookies.user_id;
    let newMealInfo = req.body;
    db.meals.postMeal(newMealInfo, userId);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: addMealControllerCallback,
    addmeal: postMealControllerCallback,
  };
}