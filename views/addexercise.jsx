var React = require("react");

class addexerciseform extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>Workout info!</h2>
          <form method="POST" action="/postexercise/success">
            <div><input name="type" placeholder="Type"></input></div>
            <div><input name="duration" placeholder="Duration (in mins)"></input></div>
            <div><button type="submit">Add Exercise</button></div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = addexerciseform;