var React = require("react");

class Ownpage extends React.Component {
  render() {

    let userName = this.props.food[0].username;

    let mealpost = this.props.food.map ( x => {
        let title = x.title;
        let photo = x.photo_url;
        let userName = x.username;
        let cheat = x.cheat;
        let time = x.creation_info;
        let foodURL = "/editfoodpost/"+ x.id;

        return<div><p>{title}</p><p> Photo: {photo} </p><p> Posted at: {time.toString()}</p><a href={foodURL}>Edit post</a></div>
    })

    let expost = this.props.exercise.map (x => {
        let type = x.type;
        let duration = x.duration;
        let userName = x.username;
        let time = x.creation_info;
        let exerciseURL = "/editexercisepost/" + x.id;

        return<div><p>{type}</p><p> {duration} mins </p><p> Posted at: {time.toString()}</p><a href={exerciseURL}>Edit post</a></div>
    })

    return (
          <html>

          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>

            <head />
            <body>
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
            </body>
          </html>
    );
  }
}

module.exports = Ownpage;