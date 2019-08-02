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
                <div className = "container">
                    <div className="row">
                        <div className="col-10 offset 1">
                            <h2>{userName}'s homepage</h2>
                            <a href = "/postmeal">Post your meal</a>
                            <a href = "/postexercise"> Post your workout</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5 offset 1">
                            {mealpost}
                        </div>
                        <div className="col-5 offset">
                            {expost}
                        </div>

                    </div>

                </div>
            </Layout>
    );
  }
}

module.exports = Ownpage;