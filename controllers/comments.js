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
    }
    db.comments.postComment(getId, newCommentInfo, userId);
  };

  let showCommentControllerCallback = (req, res) => {
    let meal_id = req.params.id;
    var getComments = (allComments) => {
        let data = {
                data : allComments
            };
            res.json(data);
    }
    db.comments.getComments(getComments, meal_id);
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    add: addCommentControllerCallback,
    show: showCommentControllerCallback
  };
}