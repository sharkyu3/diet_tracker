module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  var sha256 = require('js-sha256');
  const SALT = "NOM NOM CHOMP CHOMP";

  let landingControllerCallback = (req, res) => {
    res.render('landing');
  };

  let loginControllerCallback = (req, res) => {
    res.render('login');
  }

  let registerControllerCallback = (req, res) => {
    res.render('register');
  };

  let checkPasswordControllerCallback = (req, res) => {
    let currentUsername = req.body.username;
    let currentPw = sha256(req.body.password + SALT);
    var getInfo = (userInfo) => {
        if (userInfo === null){
            //AJAX pop up no such log in or register
            console.log("in login controller no result returned");
            res.redirect('/login');
        } else{
            if(userInfo.password === currentPw){
                console.log("in login controller check for password");
                res.cookie('loggedin', sha256(userInfo.id + SALT));
                res.cookie('user_id', userInfo.id);
                res.cookie('eco', userInfo.ecosystems_id);
                res.redirect('/home');
            }else{
                //AJAX pop up wrong password
                res.redirect('login');
                console.log("in login controller wrong password");
            }
        }
    }
    db.users.letsLogin(getInfo, currentUsername);
  };

  let signupControllerCallback = (req, res) =>{
    let newUserInfo = req.body;
    let username = req.body.username;
    let userId = null;

    var getId = (id) => {
        userId = id;
        res.cookie('user_id', userId);
        res.cookie('loggedin', sha256(userId + SALT));
        res.redirect('/setupecosystem');
    }
    db.users.registerUser(getId, newUserInfo);
  };

  let logoutControllerCallback = (req, res) =>{
    res.clearCookie('loggedin');
    res.clearCookie('user_id');
    res.clearCookie('eco');
    res.send("logged out");
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: landingControllerCallback,
    setlogin: loginControllerCallback,
    register: registerControllerCallback,
    check: checkPasswordControllerCallback,
    signup: signupControllerCallback,
    logout: logoutControllerCallback
  };

}