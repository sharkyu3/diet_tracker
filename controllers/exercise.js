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

  let selectExerciseControllerCallback = (req, res) => {
    let exerciseId = req.params.id;
    let data = {
        exercise: null,
        exerciseId: exerciseId,
    }
    var getExercise = (exerciseItem) => {
        data.exercise = exerciseItem;
        res.render('individualexercise', data);
    }
    db.exercise.getExercise(getExercise, exerciseId);
  };

  let editExerciseControllerCallback = (req, res) => {
    let exerciseId = req.params.id;
    let userId = req.cookies.user_id
    let editExerciseInfo = req.body;
    db.exercise.editExercise(editExerciseInfo, exerciseId);
    res.redirect('/home/'+userId);
  };

  let deleteExerciseControllerCallback = (req, res) => {
    let exerciseId = req.params.id;
    let userId = req.cookies.user_id;
    db.exercise.deleteExercise(exerciseId);
    res.redirect('/home/'+userId);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: addExerciseControllerCallback,
    addexercise: postExerciseControllerCallback,
    select: selectExerciseControllerCallback,
    edit: editExerciseControllerCallback,
    delete: deleteExerciseControllerCallback,
  };
}