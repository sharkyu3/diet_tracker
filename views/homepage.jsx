var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class Homepage extends React.Component {
  render() {
    let ecoName = this.props.food[0].group_name;
    let ecoDescription = this.props.food[0].description;
    let userlink = "/home/" + this.props.user_id;
    let mealpost = this.props.food.map ( x => {
        let title = x.title;
        let publicId = x.photo_url;
        let userName = x.username;
        let cheat = x.cheat;
        let time = x.creation_info;

        var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});

        return(
            <div className="card">
              <img className="card-img-top" src={imgUrl}></img>
              <div className="card-body">
                <h5 className="card-title">{userName}'s meal</h5>
                <p className="card-text">{title}</p>
                <p className="card-text">Posted at: {time.toString()}</p>
              </div>
            </div>
            )
    })

    let expost = this.props.exercise.map (x => {
        let type = x.type;
        let duration = x.duration;
        let userName = x.username;
        let time = x.creation_info;
        let publicId = x.photo_url;
        var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});

        return(
            <div className="card">
              <img className="card-img-top" src={imgUrl}></img>
              <div className="card-body">
                <h5 className="card-title">{userName}'s workout</h5>
                <p className="card-text">{type}</p>
                <p className="card-text">Duration: {duration} mins</p>
                <p className="card-text">Posted at: {time.toString()}</p>
              </div>
            </div>
            )
    })

    return (
        <Layout>
            <div className = "container-fluid">
                <div className="row-fluid">
                    <div className="col-8 offset-2" id="homebuttonholder">
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
                                                <label for="title" className="col-sm-2 control-label">What did you have?</label>
                                                <input name="title"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="file" className="col-sm-2 control-label">Photo</label>
                                                <input type = "file" name="photo_url"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="cheat" className="col-sm-2 control-label">Is this a cheat meal?</label>
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
                                                <label for="type" className="col-sm-6 control-label">What workout did you do?</label>
                                                <input name="type"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="file" className="col-sm-6 control-label">Photo</label>
                                                <input type = "file" name="photo_url"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="duration" className="col-sm-6 control-label">How long was your workout (in mins)?</label>
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





                <div className="row">
                    <div className="col-8">
                        <h2>{ecoName}</h2>
                        <h6>{ecoDescription}</h6>
                    </div>
                    <div className="col-4">
                        <h2>Own dashboard</h2>
                        <a href= {userlink}>Your info</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset 1">
                        {mealpost}
                    </div>
                    <div className="col-4 offset">
                        {expost}
                    </div>
                </div>




            </div>
        </Layout>
    );
  }
}

module.exports = Homepage;