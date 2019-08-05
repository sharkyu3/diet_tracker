/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    var sha256 = require('js-sha256');
    const SALT = "NOM NOM CHOMP CHOMP";

  let letsLogin = (callback, currentUsername) => {
    let query = "SELECT * FROM users WHERE username= $1";
    let values = [currentUsername];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        if(queryResult.rows.length > 0){
            console.log("in login model HAVE result");
            callback(queryResult.rows[0]);
        }else{
            console.log("in login model no result");
            callback(null);
        }
      }
    });
  };

  let registerUser = (callback, newUserInfo) => {
    let query = "INSERT INTO users (username, password, email, name) VALUES ($1, $2, $3, $4) RETURNING id";
    let arr = [newUserInfo.username, sha256(newUserInfo.password + SALT), newUserInfo.email, newUserInfo.name];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("sign up successful");
        callback(queryResult.rows[0].id);
      }
    });
  };

  let updateInfo = (userId, ecoId) => {
    let query = "UPDATE users SET ecosystems_id = $1 WHERE users.id = $2";
    let arr = [ecoId, userId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){
        console.log("error: " + error);
      }else{
        console.log("updated eco id successfully");
      }
    });
  };

  let getUsername = (callback, userId) => {
    let query = "SELECT users.username FROM users WHERE users.id = $1";
    let arr = [userId];
    dbPoolInstance.query(query, arr, (error, queryResult) => {
        if (error) {
            console.log("error: " + error);
        }else{
            callback(queryResult.rows[0]);
        }
    })
  }

  return {
    letsLogin,
    registerUser,
    updateInfo,
    getUsername
  };
};