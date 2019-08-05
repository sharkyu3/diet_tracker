/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'huiyu',
    host: '127.0.0.1',
    database: 'dietdb',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const usersFunction = require('./models/users');
const usersModelObject = usersFunction( pool );

const infoFunction = require('./models/info');
const infoModelObject = infoFunction( pool );

const mealsFunction = require('./models/meals');
const mealsModelObject = mealsFunction( pool );

const exerciseFunction = require('./models/exercise');
const exerciseModelObject = exerciseFunction( pool );

const ecoFunction = require('./models/ecosystem');
const ecoModelObject = ecoFunction( pool );

const commentFunction = require('./models/comments');
const commentModelObject = commentFunction( pool );

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */
  users: usersModelObject,
  info: infoModelObject,
  meals: mealsModelObject,
  exercise: exerciseModelObject,
  ecosystem: ecoModelObject,
  comments: commentModelObject
};