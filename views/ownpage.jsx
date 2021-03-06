var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class Ownpage extends React.Component {
  render() {
    let userName = this.props.username.username;
    let userURL = "/home/"+this.props.user_id;

    let foodthumbnail = this.props.food.map (x => {
        let publicId = x.photo_url;
        let title = x.title;
        let imgUrl = cloudinary.url(`${publicId}`, { width: 800, height: 800, crop: 'fill'});
        let foodURL = "/editfoodpost/"+ x.id;
        let cheat = x.cheat;

        return(
            <div className="col-xs-4 col-lg-3 thumbs"><a href={foodURL} className="thumbnail" id={cheat.toString()}><img src={imgUrl}></img></a>
            </div>
            )
    })

    let exthumbnail = this.props.exercise.map (x => {
        let publicId = x.photo_url;
        let imgUrl = cloudinary.url(`${publicId}`, { width: 800, height: 800, crop: 'fill'});
        let exURL = "/editexercisepost/"+ x.id;
        let type = x.type;
        let duration = x.duration;

        return(
            <div className="col-xs-4 col-lg-3" id="thumbs"><a href={exURL} className="thumbnail"><img src={imgUrl}></img></a></div>)
    })

    return (
          <Layout>
                <div className = "container-fluid" id="maincontainer">
                    <div className="row-fluid">
                        <div className="col-xs-12">
                            <h2>{userName}'s homepage</h2>
                            <div className="col-xs-8 offset-2" id="homebuttonholder">
                                <button type="button" className="btn btn-info btn-lg post" data-toggle="modal" data-target="#mealModal" id="logbuttons">Log a meal</button>
                                <button type="button" className="btn btn-info btn-lg post" data-toggle="modal" data-target="#exerciseModal" id="logbuttons">Log a workout</button>

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
                                                <label for="title" className="col-xs-4 control-label">What did you have?</label>
                                                <input name="title" className="col-xs-6 offset-1" required></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="file" className="col-xs-4 control-label">Photo</label>
                                                <input type = "file" name="photo_url" className="col-xs-6 offset-1" required></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="cheat" className="col-xs-4 control-label">Is this a cheat meal?</label>
                                                <select name="cheat"className="col-xs-6 offset-1">
                                                    <option value="false">NOPE!</option>
                                                    <option value="true">yes...</option>
                                                </select>
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
                                                <label for="type" className="col-xs-4 control-label">What workout did you do?</label>
                                                <input name="type" className="col-xs-6 offset-1" required></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="file" className="col-xs-4 control-label">Photo</label>
                                                <input type = "file" name="photo_url" className="col-xs-6 offset-1" required></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="duration" className="col-xs-4 control-label">How long was your workout (in mins)?</label>
                                                <input name="duration" className="col-xs-6 offset-1" required></input>
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
                        <div className="col-xs-12 col-lg-10 offset-lg-1" id="thumbnailholder">
                            <div className="row-fluid">
                                <h3 className="logheader">Meal log</h3>
                            </div>
                            <div className="row-fluid">
                                {foodthumbnail}
                            </div>
                        </div>
                    </div>

                    <div className="row-fluid">
                        <div className="col-xs-12 col-lg-10 offset-lg-1" id="thumbnailholder">
                            <div className="row-fluid">
                                <h3 className="logheader">Workout log</h3>
                            </div>
                            <div className="row-fluid">
                                {exthumbnail}
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
    );
  }
}

module.exports = Ownpage;