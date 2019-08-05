var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class exercisepage extends React.Component {
  render() {
    let userlink = "/home/" + this.props.user;
    let time = this.props.exercise.creation_info;
    let exerciseId = this.props.exerciseId;
    let publicId = this.props.exercise.photo_url;
    let type = this.props.exercise.type;
    let duration = this.props.exercise.duration;
    var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250, crop: 'scale'});
    let editURL = `/editexercisepost/${exerciseId}/?_method=put`
    let deleteURL = `/deleteexercisepost/${exerciseId}/?_method=delete`

    return (
        <Layout user={userlink}>
            <div className = "container-fluid" id="maincontainer">
                <div className="row-fluid" id="postholder">
                    <div className="col-xs-10 offset-xs-1 col-lg-8 offset-lg-2">
                        <div className="row-fluid">
                            <h2>{type}</h2>
                        </div>
                        <div className="row-fluid">
                            <img src = {imgUrl}></img>
                        </div>
                        <div className="row-fluid">
                            <h4>{duration} mins</h4>
                        </div>
                        <div className="row-fluid">
                            <p>{time.toString()}</p>
                        </div>
                        <div className="row-fluid">
                            <button type="button" className="btn btn-info btn-default post" data-toggle="modal" data-target="#exedit" id="logbuttons">Edit workout</button>
                            <div className="modal fade" id="exedit" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Edit your meal</h4>
                                    </div>

                                    <div className="modal-body">
                                        <form encType="multipart/form-data" className="form-horizontal" method="POST" action={editURL} onsubmit="return InsertDefaultValues()">

                                            <div className="form-group">
                                                <label for="type" className="col-xs-4 control-label">Type of workout</label>
                                                <input name="type" className="col-xs-6 offset-1" value={type}></input>
                                            </div>

                                            <div className="form-group">
                                                <label for="file" className="col-xs-4 control-label">Photo</label>
                                                <input type = "file" name="photo_url" className="col-xs-6 offset-1" value={publicId}></input>
                                            </div>

                                            <div className="form-group">
                                                <label for="duration" className="col-xs-4 control-label">Duration of workout (in mins)</label>
                                                <input name="duration" className="col-xs-6 offset-1" value={duration}></input>
                                            </div>
                                             <div>
                                                <button type="submit">Edit workout</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                                <form method="POST" action={deleteURL}>
                                    <button type="submit" className="btn btn-info btn-default post" id="deletebutton">Delete post</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = exercisepage;