var React = require("react");

class Homepage extends React.Component {
  render() {
    console.log(this.props);
    let mealpost = this.props.food.map ( x => {
        let title = x.title;
        let photo = x.photourl;
        let userName = x.username;
        let time = x.creationInfo;
        let cheat = x.cheat;

        return<div><h3> {userName}'s meal!' </h3><p>{title}</p><p> Photo: {photo} </p><p> Posted at: {time}</p></div>
    })

    let expost = this.props.exercise.map (x => {
        let type = x.type;
        let duration = x.duration;
        let timeEx = x.creationInfo;
        let userName = x.username;

        return<div><h3> {userName}'s exercise!' </h3><p>{type}</p><p> {duration} mins </p><p> Posted at: {timeEx}</p></div>
    })

    return (
      <html>
        <head />
        <body>
          <h2>NOM CHOMP homepage</h2>
          {mealpost}
          {expost}
        </body>
      </html>
    );
  }
}

module.exports = Homepage;