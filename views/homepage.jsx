var React = require("react");
var cloudinary = require('cloudinary');
var moment = require('moment');
var Layout = require('./layouts/default');

class Homepage extends React.Component {
  render() {
    let ecoName = this.props.eco.group_name;
    let ecoDescription = this.props.eco.description;
    let userlink = "/home/" + this.props.user_id;

    let mealpost = this.props.food.map ( x => {
        let id = x.id;
        let title = x.title;
        let publicId = x.photo_url;
        let userName = x.username;
        let cheat = x.cheat;
        let time = x.creation_info;
        let editedtime = moment.parseZone(time);

        let datatarget = "#" + x.title;
        let commentURL = "/mealcomment/"+id;
        let showcommentURL = "/showmealcomments/"+id;

        var imgUrl = cloudinary.url(`${publicId}`, { width: 800, height: 800, crop: 'fill'});

        return(
            <div className="card mealcard">
              <img className="card-img-top" src={imgUrl}></img>
              <div className="card-body">
                <h3 className="card-title">{userName}'s meal</h3>
                <h4 className="card-text">{title}</h4>
                <p className="card-text">Posted at: {editedtime.toString()}</p>
                <button type="button" className="btn btn-info btn-lg post" data-toggle="modal" data-target={datatarget.replace(/ /g, '-')}>Comment on this</button>

                <div className="modal fade" id={title.replace(/ /g, '-')} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{title}</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" method="POST" action={commentURL}>
                                    <div className="form-group">
                                        <label for="comment" className="col-xs-4 control-label">Comment:</label>
                                        <input name="comment" className="col-xs-6 offset-1 inputcomment" required></input>
                                    </div>
                                    <div>
                                        <button type="submit" className="commentbutton" id={id} data-dismiss="modal">Log comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className="accordion revealcomments" id={id}>Show comments</button>
                    <div id="commentslist" list={id} className="panel commentslist">
                    </div>
                </div>
              </div>
            </div>
            )
    })

    let expost = this.props.exercise.map (x => {
        let id = x.id;
        let type = x.type;
        let duration = x.duration;
        let userName = x.username;
        let time = x.creation_info;
        let editedtime = moment.parseZone(time);
        let publicId = x.photo_url;
        var imgUrl = cloudinary.url(`${publicId}`, { width: 800, height: 800, crop: 'fill'});
        let datatarget = "#" + x.type;
        let commentURL = "/excomment/"+id;
        let showcommentURL = "/showexcomments/"+id;
        let extag = "extag"+id;

        return(
            <div className="card excard">
              <img className="card-img-top" src={imgUrl}></img>
              <div className="card-body">
                <h3 className="card-title">{userName}'s workout</h3>
                <h4 className="card-text">{type}</h4>
                <p className="card-text">Duration: {duration} mins</p>
                <p className="card-text">Posted at: {editedtime.toString()}</p>
                <button type="button" className="btn btn-info btn-lg post" data-toggle="modal" data-target={datatarget.replace(/ /g, "-")}>Comment on this</button>
                <div className="modal fade" id={type.replace(/ /g, "-")} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{type}</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" method="POST" action={commentURL}>
                                    <div className="form-group">
                                        <label for="comment" className="col-xs-4 control-label">Comment:</label>
                                        <input name="comment" className="col-xs-6 offset-1 inputexcomment" required></input>
                                    </div>
                                    <div>
                                        <button type="submit" className="excommentbutton" data-dismiss="modal" id={id}>Log comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className="accordion revealexcomments" id={id}>Show comments</button>
                    <div id="excommentslist" list={extag} className="panel excommentslist">
                    </div>
                </div>
              </div>
            </div>
            )
    })

    return (
        <Layout user={userlink}>
            <div className = "container-fluid" id= "maincontainer">
                <div className="row-fluid">
                    <div className="col-xs-12" id="homebuttonholder">
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

                                             <div>
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

                <div className="row-fluid">
                    <div className="col-xs-12" id="ecoholder">
                        <h2>{ecoName}</h2>
                        <h4>{ecoDescription}</h4>
                    </div>
                </div>

                <div className = "row-fluid">
                    <div className="col-xs-12 col-lg-6 offset-lg-3" id="cardholder">
                        <div className="row-fluid" id="showbuttons">
                            <button data-toggle="collapse" data-target="#mealslist" className="showme showoff" id="showmeal">Show meals</button>
                            <button data-toggle="collapse" data-target="#exerciselist" className="showme showoff" id="showex">Show workouts</button>
                        </div>
                        <div className="row-fluid">
                            <div id="mealslist" className="collapse in">
                                {mealpost}
                            </div>
                            <div id="exerciselist" className="collapse">
                                {expost}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script dangerouslySetInnerHTML={{
                __html:
                    `var userId = '${this.props.user_id}';`
            }}/>
            <script type="text/javascript" src="/script.js"></script>
        </Layout>

    );
  }
}

module.exports = Homepage;