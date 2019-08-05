var cloudinary = require('cloudinary');

cloudinary.config({
 cloud_name: 'dp3jrgjdx',
 api_key: '371394598847916',
 api_secret: 'Y09Wcgn8fJfk34K1j1QtQWSTQew'
});

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let postExerciseControllerCallback = (req, res) => {
    let userId = req.cookies.user_id;
    let newExerciseInfo = req.body;

    cloudinary.uploader.upload(req.file.path, function(result) {
        db.exercise.postExercise(newExerciseInfo, userId, result.public_id);
        res.redirect('/home/'+userId);
    });
  };

  let selectExerciseControllerCallback = (req, res) => {
    let exerciseId = req.params.id;
    let userId = req.cookies.user_id;
    let data = {
        exercise: null,
        exerciseId: exerciseId,
        user: userId
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
    addexercise: postExerciseControllerCallback,
    select: selectExerciseControllerCallback,
    edit: editExerciseControllerCallback,
    delete: deleteExerciseControllerCallback,
  };
}