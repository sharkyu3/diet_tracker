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
        db.comments.linkMealsComment(mealId, commentId);
    }
    db.comments.postComment(getId, newCommentInfo, userId);
  };

  let showmealCommentControllerCallback = (req, res) => {
    let meal_id = req.params.id;
    var getComments = (allComments) => {
        let data = {
                data : allComments
            };
            res.json(data);
    }
    db.comments.getMealComments(getComments, meal_id);
  };

  let addExCommentControllerCallback = (req, res) => {
    let userId = req.cookies.user_id;
    let exId = req.params.id;
    let newCommentInfo = req.body;
    let commentId = null;

    var getId = (id) => {
        commentId = id;
        db.comments.linkExComment(exId, commentId);
    }
    db.comments.postComment(getId, newCommentInfo, userId);
  };

  let showexerciseCommentControllerCallback = (req, res) => {
    console.log("inside get exercise comments controller");
    let exercise_id = req.params.id;
    var getExComments = (allComments) => {
        let data = {
                data : allComments
            };
            res.json(data);
    }
    db.comments.getExComments(getExComments, exercise_id);
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    add: addCommentControllerCallback,
    showmeal: showmealCommentControllerCallback,
    addEx: addExCommentControllerCallback,
    showEx: showexerciseCommentControllerCallback
  };
}