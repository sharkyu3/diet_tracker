var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class exercisepage extends React.Component {
  render() {

    let time = this.props.exercise.creation_info;
    let exerciseId = this.props.exerciseId;
    let publicId = this.props.exercise.photo_url;
    console.log(this.props.exercise);
    var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});
    let editURL = `/editexercisepost/${exerciseId}/?_method=put`
    let deleteURL = `/deleteexercisepost/${exerciseId}/?_method=delete`

    return (
        <Layout>
            <div className = "container">
                <div className="row">
                    <h2>Exercise post to be edited</h2>
                </div>
                <div className="row">
                        <div>
                            <form method="POST" action= {editURL}>
                                <p>
                                    <input name="type" value={this.props.exercise.type}></input>
                                </p>
                                <p>
                                    <input name="duration" value={this.props.exercise.duration}></input>
                                </p>
                                <p>
                                    <img src = {imgUrl}></img>
                                </p>
                                <button type="submit">Edit post</button>
                            </form>
                            <form method="POST" action={deleteURL}>
                                <button type="submit">Delete post</button>
                            </form>
                        </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = exercisepage;