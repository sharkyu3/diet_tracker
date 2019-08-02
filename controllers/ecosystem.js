module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  var sha256 = require('js-sha256');
  const SALT = "NOM NOM CHOMP CHOMP";

  let addEcosystemControllerCallback = (req, res) => {
    res.render('ecosystembase');
  };

  let addformControllerCallback = (req, res) => {
    res.render('ecosystem');
  }

  let postEcosystemControllerCallback = (req, res) => {
    let userId = req.cookies.user_id;
    let newEcoInfo = req.body;
    let ecoId = null;

    var getEcoId = (getEcoID) => {
        ecoId = getEcoID;
        res.cookie('eco', ecoId);
        res.redirect('/home');
    }
    db.ecosystem.postEcosystem(getEcoId, newEcoInfo, userId);
  };

  let signinEcosystemControllerCallback = (req, res) => {
    res.render('ecologin');
  }

let checkPasswordControllerCallback = (req, res) => {
    let currentGroupname = req.body.group_name;
    let currentPw = sha256(req.body.group_pw + SALT);

    var getInfo = (groupInfo) => {
        if (groupInfo === null){
            //AJAX pop up no such log in or register
            console.log("in group login controller no result returned");
            res.redirect('/logintoecosystem');
        } else{
            if(groupInfo.group_pw === currentPw){
                console.log("in group login controller check for password");
                let userId = req.cookies.user_id;
                let ecoId = groupInfo.id;
                res.cookie('eco', ecoId);
                db.users.updateInfo(userId, ecoId);
                res.redirect('/home');
            }else{
                //AJAX pop up wrong password
                res.redirect('/logintoecosystem');
                console.log("in group login controller wrong password");
            }
        }
    }
    db.ecosystem.letsLogin(getInfo, currentGroupname);
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: addEcosystemControllerCallback,
    addpage: addformControllerCallback,
    addecosystem: postEcosystemControllerCallback,
    signin: signinEcosystemControllerCallback,
    check: checkPasswordControllerCallback
  };
}