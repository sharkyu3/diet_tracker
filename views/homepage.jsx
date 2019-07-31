var React = require("react");

class Homepage extends React.Component {
  render() {
    let mealpost = this.props.food.map ( x => {
        let title = x.title;
        let photo = x.photo_url;
        let userName = x.username;
        let cheat = x.cheat;
        let time = x.creation_info;

        return<div><h2> {userName}'s meal!' </h2><p>{title}</p><p> Photo: {photo} </p><p> Posted at: {time.toString()}</p></div>
    })

    let expost = this.props.exercise.map (x => {
        let type = x.type;
        let duration = x.duration;
        let userName = x.username;
        let time = x.creation_info;

        return<div><h2> {userName}'s exercise!' </h2><p>{type}</p><p> {duration} mins </p><p> Posted at: {time.toString()}</p></div>
    })

    return (
          <html>

          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>

            <head />
            <body>
                <div className = "container">
                    <div className="row">
                        <div className="col-8">
                            <h2>NOM CHOMP homepage</h2>
                            <a href = "/postmeal">Post your meal</a>
                            <a href = "/postexercise"> Post your workout</a>
                        </div>
                        <div className="col-4">
                            <h2>Own dashboard</h2>
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
            </body>
          </html>
    );
  }
}

module.exports = Homepage;