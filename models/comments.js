/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let postComment = (callback, newCommentInfo, userId, result) => {
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
            console.log("logged link table properly");
        }
    })
  }

  let getMeal = (callback, foodId) => {
    let query = "SELECT meals.title, meals.photo_URL, meals.cheat, meals.creation_info FROM meals WHERE meals.id = $1";
    let values = [foodId];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("successful meal query");
        callback(queryResult.rows[0]);
      }
    });
  };

  let editMeal = (editFoodInfo, foodId) => {
    let query = "UPDATE meals SET title=$1, photo_URL=$2, cheat=$3 WHERE meals.id = $4";
    let arr = [editFoodInfo.title, editFoodInfo.photo_url, editFoodInfo.cheat, foodId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("edited meal successfully");
      }
    });
  };

  let deleteMeal = (foodId) => {
    let query = "DELETE FROM meals WHERE meals.id=$1";
    let arr = [foodId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("deleted meal successfully");
      }
    });
  };

  return {
    postComment,
    linkComment,
    // getMeal,
    // editMeal,
    // deleteMeal
  };
};