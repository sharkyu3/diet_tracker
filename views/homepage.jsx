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
                <div className="row">
                    <div className="col-8">
                        <h2>{ecoName}</h2>
                        <h6>{ecoDescription}</h6>
                        <a href = "/postmeal">Post your meal</a>
                        <a href = "/postexercise"> Post your workout</a>
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