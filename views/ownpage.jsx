var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class Ownpage extends React.Component {
  render() {
    let userName = this.props.food[0].username;
    let mealpost = this.props.food.map ( x => {
        let title = x.title;
        let publicId = x.photo_url;
        var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});
        let userName = x.username;
        let cheat = x.cheat;
        let time = x.creation_info;
        let foodURL = "/editfoodpost/"+ x.id;

        return<div><p>{title}</p><p> <img src = {imgUrl}></img> </p><p> Posted at: {time.toString()}</p><a href={foodURL}>Edit post</a></div>
    })

    let expost = this.props.exercise.map (x => {
        let type = x.type;
        let duration = x.duration;
        let userName = x.username;
        let time = x.creation_info;
        let publicId = x.photo_url;
        var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});
        let exerciseURL = "/editexercisepost/" + x.id;

        return<div><p>{type}</p><p> {duration} mins </p><p> <img src = {imgUrl}></img> </p><p> Posted at: {time.toString()}</p><a href={exerciseURL}>Edit post</a></div>
    })

    return (
          <Layout>
                <div className = "container-fluid">
                    <div className="row-fluid">
                        <div className="col-xs-10 offset-1">
                            <h2>{userName}'s homepage</h2>
                            <div className="col-xs-8 offset-2" id="homebuttonholder">
                        <button type="button" className="btn btn-info btn-lg post" data-toggle="modal" data-target="#mealModal">Log a meal</button>
                        <button type="button" className="btn btn-info btn-lg post" data-toggle="modal" data-target="#exerciseModal">Log a workout</button>

                        <div className="modal fade" id="mealModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Log your meal</h4>
                                    </div>

                                    <div className="modal-body">
                                        <form encType="multipart/form-data" className="form-horizontal" method="POST" action="/postmeal/success">
                                            <div className="form-group">
                                                <label for="title" className="col-xs-6 control-label">What did you have?</label>
                                                <input name="title"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="file" className="col-xs-6 control-label">Photo</label>
                                                <input type = "file" name="photo_url"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="cheat" className="col-xs-6 control-label">Is this a cheat meal?</label>
                                                <input name="cheat"></input>
                                            </div>
                                             <div >
                                                <button type="submit">Log meal</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="exerciseModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Log your workout</h4>
                                    </div>

                                    <div className="modal-body">
                                        <form encType="multipart/form-data" className="form-horizontal" method="POST" action="/postexercise/success">
                                            <div className="form-group">
                                                <label for="type" className="col-xs-6 control-label">What workout did you do?</label>
                                                <input name="type"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="file" className="col-xs-6 control-label">Photo</label>
                                                <input type = "file" name="photo_url"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="duration" className="col-xs-6 control-label">How long was your workout (in mins)?</label>
                                                <input name="duration"></input>
                                            </div>
                                             <div >
                                                <button type="submit">Log workout</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    <div className="row-fluid">
                        <div className="col-xs-4 offset-1">
                            {mealpost}
                        </div>
                        <div className="col-xs-4 offset-2">
                            {expost}
                        </div>
                    </div>

                </div>
            </Layout>
    );
  }
}

module.exports = Ownpage;