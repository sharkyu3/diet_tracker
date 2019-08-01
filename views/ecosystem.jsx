var React = require("react");

class addecosystemform extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>Set-up a new Ecosystem!</h2>
          <form method="POST" action="/addecosystem">
            <div><input name="group_name" placeholder="Name your ecosystem"></input></div>
            <div><input name="group_pw" placeholder="Set your group password"></input></div>
            <div><input name="description" placeholder="Describe your ecosystem"></input></div>
            <div><input name="weekly_exercise_sessions" placeholder="Exercise sessions per week"></input></div>
            <div><input name="weekly_cheats" placeholder="How cheats per week?"></input></div>
            <div><button type="submit">Let's get going!</button></div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = addecosystemform;