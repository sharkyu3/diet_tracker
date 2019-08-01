module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let addEcosystemControllerCallback = (req, res) => {
    res.render('ecosystem');
  };

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


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: addEcosystemControllerCallback,
    addecosystem: postEcosystemControllerCallback
  };
}