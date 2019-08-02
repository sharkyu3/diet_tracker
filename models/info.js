/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllMeals = (callback, ecoId) => {
    let query = 'SELECT meals.title, meals.photo_URL, meals.creation_info, meals.cheat, users.username, ecosystems.group_name, ecosystems.description FROM meals INNER JOIN users ON (meals.users_id = users.id) INNER JOIN ecosystems ON (ecosystems.id = users.ecosystems_id) WHERE ecosystems.id = $1';
    let values = [ecoId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        let data = [];
        for(let i=0; i<queryResult.rows.length; i++){
            if(queryResult.rows[i].title !== null){
                data.push(queryResult.rows[i]);
            }
        }
        callback(data);
      }
    });
  };

  let getAllExercises = (callback, ecoId) => {
    let query = 'SELECT exercises.type, exercises.duration, exercises.creation_info, exercises.photo_URL, users.username FROM exercises INNER JOIN users ON (exercises.users_id = users.id) INNER JOIN ecosystems ON (ecosystems.id = users.ecosystems_id) WHERE ecosystems.id = $1';
    let values = [ecoId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        let data = [];
        for(let i=0; i<queryResult.rows.length; i++){
            if(queryResult.rows[i].title !== null){
                data.push(queryResult.rows[i]);
            }
        }
        callback(data);
      }
    });
  };

    let getUserMeals = (callback, userId) => {
    let query = 'SELECT meals.id, meals.title, meals.photo_URL, meals.creation_info, meals.cheat, users.username FROM meals INNER JOIN users ON (meals.users_id = users.id)  WHERE users.id = $1';
    let values = [userId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        let data = [];
        for(let i=0; i<queryResult.rows.length; i++){
            if(queryResult.rows[i].title !== null){
                data.push(queryResult.rows[i]);
            }
        }
        callback(data);
      }
    });
  };

  let getUserExercises = (callback, userId) => {
    let query = 'SELECT exercises.id, exercises.type, exercises.duration, exercises.creation_info, exercises.photo_URL, users.username FROM exercises INNER JOIN users ON (exercises.users_id = users.id) WHERE users.id = $1';
    let values = [userId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        let data = [];
        for(let i=0; i<queryResult.rows.length; i++){
            if(queryResult.rows[i].title !== null){
                data.push(queryResult.rows[i]);
            }
        }
        callback(data);
      }
    });
  };

  return {
    getAllMeals,
    getAllExercises,
    getUserMeals,
    getUserExercises,
  };
};