module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let addExerciseControllerCallback = (req, res) => {
    res.render('addexercise');
  };

  let postExerciseControllerCallback = (req, res) => {
    let userId = req.cookies.user_id;
    let newExerciseInfo = req.body;
    db.exercise.postExercise(newExerciseInfo, userId);
    res.redirect('/home');

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: addExerciseControllerCallback,
    addexercise: postExerciseControllerCallback,
  };
}