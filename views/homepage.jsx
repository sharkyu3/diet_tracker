var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class Homepage extends React.Component {
  render() {

    let userlink = "/home/" + this.props.user_id;
    let mealpost = this.props.food.map ( x => {
        let title = x.title;
        let publicId = x.photo_url;
        let userName = x.username;
        let cheat = x.cheat;
        let time = x.creation_info;

        var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});

        return<div><h2> {userName}'s meal </h2><p>{title}</p><p> <img src = {imgUrl}></img> </p><p> Posted at: {time.toString()}</p></div>
    })

    let expost = this.props.exercise.map (x => {
        let type = x.type;
        let duration = x.duration;
        let userName = x.username;
        let time = x.creation_info;
        let publicId = x.photo_url;
        var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});

        return<div><h2> {userName}'s workout </h2><p>{type}</p><p> {duration} mins </p><p> <img src = {imgUrl}></img> </p><p> Posted at: {time.toString()}</p></div>
    })

    return (
        <Layout>
            <div className = "container">
                <div className="row">
                    <div className="col-8">
                        <h2>NOM CHOMP homepage</h2>
                        <a href = "/postmeal">Post your meal</a>
                        <a href = "/postexercise"> Post your workout</a>
                    </div>
                    <div className="col-4">
                        <h2>Own dashboard</h2>
                        <a href= {userlink}>Your info</a>
                        <a href = '/logout'>Logout</a>
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