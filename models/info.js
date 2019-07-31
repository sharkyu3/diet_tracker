/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllMeals = (callback, ecoId) => {
    let query = 'SELECT meals.title, meals.photo_URL, meals.creation_info, meals.cheat, users.username FROM meals INNER JOIN users ON (meals.users_id = users.id) INNER JOIN ecosystems ON (ecosystems.id = users.ecosystems_id) WHERE ecosystems.id = $1';
    let values = [ecoId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        callback(queryResult.rows)
      }
    });
  };

  let getAllExercises = (callback, ecoId) => {
    let query = 'SELECT exercises.type, exercises.duration, exercises.creation_info, users.username FROM exercises INNER JOIN users ON (exercises.users_id = users.id) INNER JOIN ecosystems ON (ecosystems.id = users.ecosystems_id) WHERE ecosystems.id = $1';
    let values = [ecoId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        callback(queryResult.rows)
      }
    });
  };

  return {
    getAllMeals,
    getAllExercises,
  };
};