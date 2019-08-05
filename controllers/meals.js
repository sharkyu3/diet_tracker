var cloudinary = require('cloudinary');

cloudinary.config({
 cloud_name: 'dp3jrgjdx',
 api_key: '371394598847916',
 api_secret: 'Y09Wcgn8fJfk34K1j1QtQWSTQew'
});

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let postMealControllerCallback = (req, res) => {
    let userId = req.cookies.user_id;
    let newMealInfo = req.body;
    cloudinary.uploader.upload(req.file.path, function(result) {
        db.meals.postMeal(newMealInfo, userId, result.public_id);
        res.redirect('/home/'+userId);
    });
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
    addmeal: postMealControllerCallback,
    select: selectMealControllerCallback,
    edit: editMealControllerCallback,
    delete: deleteMealControllerCallback,
  };
}