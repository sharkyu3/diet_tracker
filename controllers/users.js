module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let homepageControllerCallback = (req, res) => {
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
    let currentPw = req.body.password;
    var getInfo = (userInfo) => {
        if (userInfo === null){
            //AJAX pop up no such log in or register
            console.log("in login controller no result returned");
            res.redirect('/login');
        } else{
            if(userInfo.password === currentPw){
                console.log("in login controller check for password");
                res.cookie('loggedin', 'true');
                res.cookie('user_id', userInfo.id);
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
    console.log("inside signup controller");
    console.log(req.body);
    let newUserInfo = req.body;
    res.cookie('loggedin', 'true');
    res.redirect('/welcome');
    db.users.registerUser(newUserInfo);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: homepageControllerCallback,
    setlogin: loginControllerCallback,
    register: registerControllerCallback,
    check: checkPasswordControllerCallback,
    signup: signupControllerCallback,
  };

}