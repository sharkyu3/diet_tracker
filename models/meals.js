/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let postMeal = (newMealInfo, userId) => {
    console.log("inside add meal model");
    console.log(newMealInfo);
    console.log(userId);
    let query = "INSERT INTO meals (title, photo_URL, cheat, users_id) VALUES ($1, $2, $3, $4)";
    let arr = [newMealInfo.title, newMealInfo.photo_url, newMealInfo.cheat, userId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("logged meal successfully");
      }
    });
  };

  return {
    postMeal,
  };
};