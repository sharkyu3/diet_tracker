module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let addCommentControllerCallback = (req, res) => {
    let userId = req.cookies.user_id;
    let mealId = req.params.id;
    let newCommentInfo = req.body;
    let commentId = null;

    var getId = (id) => {
        commentId = id;
        db.comments.linkComment(mealId, commentId);
        res.redirect('/home');
    }
    db.comments.postComment(getId, newCommentInfo, userId);
  };

  let selectMealControllerCallback = (req, res) => {
    let foodId = req.params.id;
    let userId = req.cookies.user_id;
    let data = {
        food: null,
        foodId: foodId,
        user: userId
    }
    var getFood = (foodItem) => {
        data.food = foodItem;
        res.render('individualmeal', data);
    }
    db.meals.getMeal(getFood, foodId);
  };

  let editMealControllerCallback = (req, res) => {
    let foodId = req.params.id;
    let userId = req.cookies.user_id;
    let editFoodInfo = req.body;
    db.meals.editMeal(editFoodInfo, foodId);
    res.redirect('/home/'+userId);
  };

  let deleteMealControllerCallback = (req, res) => {
    let foodId = req.params.id;
    let userId = req.cookies.user_id;
    db.meals.deleteMeal(foodId);
    res.redirect('/home/'+userId);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    add: addCommentControllerCallback,
  };
}