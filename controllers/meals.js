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
    let userId = req.cookies.user_id;
    let newMealInfo = req.body;
    db.meals.postMeal(newMealInfo, userId);
    res.redirect('/home');

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