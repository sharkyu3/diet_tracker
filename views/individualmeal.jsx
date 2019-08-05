var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class foodpage extends React.Component {
  render() {
    let userlink = "/home/" + this.props.user;
    let time = this.props.food.creation_info;
    let title= this.props.food.title;
    let foodId = this.props.foodId;
    let cheat = this.props.food.cheat;
    let publicId = this.props.food.photo_url;
    var imgUrl = cloudinary.url(`${publicId}`, { width: 400, height: 400});
    let editURL = `/editfoodpost/${foodId}/?_method=put`
    let deleteURL = `/deletefoodpost/${foodId}/?_method=delete`

    return (
        <Layout user={userlink}>
            <div className = "container-fluid" id="maincontainer">
                <div className="row-fluid" id="postholder">
                        <div className="col-xs-10 offset-xs-1 col-lg-8 offset-lg-2">
                            <div className="row-fluid">
                                <h2>{title}</h2>
                            </div>
                            <div className="row-fluid">
                                <img src = {imgUrl}></img>
                            </div>
                            <div className="row-fluid">
                                <p>Cheat meal? {cheat.toString()}</p>
                            </div>
                            <div className="row-fluid">
                                <p>{time.toString()}</p>
                            </div>

                            <div className="row-fluid">
                                <button type="button" className="btn btn-info btn-default post" data-toggle="modal" data-target="#mealedit" id="logbuttons">Edit meal</button>

                                <div className="modal fade" id="mealedit" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Edit your meal</h4>
                                    </div>

                                    <div className="modal-body">
                                        <form encType="multipart/form-data" className="form-horizontal" method="POST" action={editURL} onsubmit="return InsertDefaultValues()">

                                            <div className="form-group">
                                                <label for="title" className="col-xs-4 control-label">What did you have?</label>
                                                <input name="title" className="col-xs-6 offset-1" value={title}></input>
                                            </div>

                                            <div className="form-group">
                                                <label for="file" className="col-xs-4 control-label">Photo</label>
                                                <input type = "file" name="photo_url" className="col-xs-6 offset-1" value={publicId}></input>
                                            </div>

                                            <div className="form-group">
                                                <label for="cheat" className="col-xs-4 control-label">Is this a cheat meal?</label>
                                                <select name="cheat"className="col-xs-6 offset-1">
                                                    <option value="false">NOPE!</option>
                                                    <option value="true">yes...</option>
                                                </select>
                                            </div>
                                             <div>
                                                <button type="submit">Edit meal</button>
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

module.exports = foodpage;