/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let postExercise = (newExerciseInfo, userId, result) => {
    let query = "INSERT INTO exercises (type, duration, users_id, photo_URL) VALUES ($1, $2, $3, $4)";
    let arr = [newExerciseInfo.type, newExerciseInfo.duration, userId, result];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("logged exercise successfully");
      }
    });
  };

  let getExercise = (callback, exerciseId) => {
    let query = "SELECT exercises.type, exercises.duration, exercises.creation_info, exercises.photo_url FROM exercises WHERE exercises.id = $1";
    let values = [exerciseId];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("successful exercise query");
        callback(queryResult.rows[0]);
      }
    });
  };

  let editExercise = (editExerciseInfo, exerciseId) => {
    let query = "UPDATE exercises SET type=$1, duration=$2 WHERE exercises.id = $3";
    let arr = [editExerciseInfo.type, editExerciseInfo.duration, exerciseId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("edited exercise successfully");
      }
    });
  };

  let deleteExercise = (exerciseId) => {
    let query = "DELETE FROM exercises WHERE exercises.id=$1";
    let arr = [exerciseId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("deleted exercise successfully");
      }
    });
  };

  return {
    postExercise,
    getExercise,
    editExercise,
    deleteExercise
  };
};