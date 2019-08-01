/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let postEcosystem = (callback, newEcoInfo, userId) => {
    let query = "INSERT INTO ecosystems (group_name, group_pw, description, admin_id, weekly_exercise_sessions, weekly_cheats) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
    let arr = [newEcoInfo.group_name, newEcoInfo.group_pw, newEcoInfo.description, userId, newEcoInfo.weekly_exercise_sessions, newEcoInfo.weekly_cheats];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("logged ecosystem successfully");
        callback(queryResult.rows[0].id);
      }
    });
  };

  // let getMeal = (callback, foodId) => {
  //   let query = "SELECT meals.title, meals.photo_URL, meals.cheat, meals.creation_info FROM meals WHERE meals.id = $1";
  //   let values = [foodId];
  //   dbPoolInstance.query(query, values, (error, queryResult) => {
  //     if( error ){
  //       console.log("error: " + error);
  //     }else{
  //       console.log("successful meal query");
  //       callback(queryResult.rows[0]);
  //     }
  //   });
  // };

  // let editMeal = (editFoodInfo, foodId) => {
  //   let query = "UPDATE meals SET title=$1, photo_URL=$2, cheat=$3 WHERE meals.id = $4";
  //   let arr = [editFoodInfo.title, editFoodInfo.photo_url, editFoodInfo.cheat, foodId];
  //   dbPoolInstance.query(query, arr, (error, queryResult) => {
  //     if( error ){
  //       console.log("error: " + error);
  //     }else{
  //       console.log("edited meal successfully");
  //     }
  //   });
  // };


  return {
    postEcosystem,
    // getMeal,
    // editMeal,
  };
};