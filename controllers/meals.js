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

  let selectMealControllerCallback = (req, res) => {
    let foodId = req.params.id;
    let data = {
        food: null,
        foodId: foodId,
    }
    var getFood = (foodItem) => {
        data.food = foodItem;
        res.render('individualmeal', data);
    }
    db.meals.getMeal(getFood, foodId);
  };

  let editMealControllerCallback = (req, res) => {
    let foodId = req.params.id;
    let userId = req.cookies.user_id
    let editFoodInfo = req.body;
    db.meals.editMeal(editFoodInfo, foodId);
    res.redirect('/home/'+userId);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: addMealControllerCallback,
    addmeal: postMealControllerCallback,
    select: selectMealControllerCallback,
    edit: editMealControllerCallback,
  };
}