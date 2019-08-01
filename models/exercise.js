/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let postExercise = (newExerciseInfo, userId) => {
    let query = "INSERT INTO exercises (type, duration, users_id) VALUES ($1, $2, $3)";
    let arr = [newExerciseInfo.type, newExerciseInfo.duration, userId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("logged exercise successfully");
      }
    });
  };

  return {
    postExercise,
  };
};