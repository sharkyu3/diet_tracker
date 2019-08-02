/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    var sha256 = require('js-sha256');
    const SALT = "NOM NOM CHOMP CHOMP";

  let postEcosystem = (callback, newEcoInfo, userId) => {
    let query = "INSERT INTO ecosystems (group_name, group_pw, description, admin_id, weekly_exercise_sessions, weekly_cheats) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
    let arr = [newEcoInfo.group_name, sha256(newEcoInfo.group_pw + SALT), newEcoInfo.description, userId, newEcoInfo.weekly_exercise_sessions, newEcoInfo.weekly_cheats];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("logged ecosystem successfully");
        callback(queryResult.rows[0].id);
      }
    });
  };

  let letsLogin = (callback, currentGroupname) => {
    let query = "SELECT * FROM ecosystems WHERE group_name= $1";
    let values = [currentGroupname];
    dbPoolInstance.query(query, values, (error, queryResult) => {
    console.log(queryResult.rows[0]);
      if( error ){
        console.log("error: " + error);
      }else{
        if(queryResult.rows.length > 0){
            callback(queryResult.rows[0]);
        }else{
            callback(null);
        }
      }
    });
  };

  return {
    postEcosystem,
    letsLogin
  };
};