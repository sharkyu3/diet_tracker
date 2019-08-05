/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let postComment = (callback, newCommentInfo, userId, result) => {
    console.log("inside post comment model");
    console.log(newCommentInfo);
    let query = "INSERT INTO comments (comment, users_id) VALUES ($1, $2) RETURNING id";
    let arr = [newCommentInfo.comment, userId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("logged comment successfully");
        callback(queryResult.rows[0].id);
      }
    });
  };

  let linkComment = (mealId, commentId) => {
    let query = "INSERT into meals_comments (meals_id, comments_id) VALUES ($1, $2)";
    let arr = [mealId, commentId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
        if (error){
            console.log("error: " + error);
        }else{
            console.log("logged link table properly")
        }
    })
  }

  let getComments = (callback, meal_id) => {
    let query = "SELECT comments.comment, comments.creationinfo, users.username FROM meals INNER JOIN meals_comments ON (meals.id = meals_comments.meals_id) INNER JOIN comments ON (comments.id = meals_comments.comments_id) INNER JOIN users ON (comments.users_id = users.id) WHERE meals.id = $1";
    let values = [meal_id];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("successful comments query");
        callback(queryResult.rows);
      }
    });
  };

  return {
    postComment,
    linkComment,
    getComments,
  };
};