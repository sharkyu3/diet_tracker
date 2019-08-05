/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let postMeal = (newMealInfo, userId, result) => {
    let query = "INSERT INTO meals (title, photo_URL, cheat, users_id) VALUES ($1, $2, $3, $4)";
    let arr = [newMealInfo.title, result, newMealInfo.cheat, userId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("logged meal successfully");
      }
    });
  };

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

  let editMeal = (editFoodInfo, foodId, result) => {
    let query = "UPDATE meals SET title=$1, photo_URL=$2, cheat=$3 WHERE meals.id = $4";
    let arr = [editFoodInfo.title, result, editFoodInfo.cheat, foodId];
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
    postMeal,
    getMeal,
    editMeal,
    deleteMeal
  };
};