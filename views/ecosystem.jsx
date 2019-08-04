var React = require("react");

class addecosystemform extends React.Component {
  render() {
    return (
      <html>
          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <head />
        <body>
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col-xs-6 offset-3">
                        <img className="img-fluid" src= "/pics/applestack.png" id="stacklogo"></img>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="col-xs-6 offset-3" id="toprow">
                        <h2>Set-up a new guild!</h2>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="col-xs-6 offset-3">
                        <form method="POST" action="/addecosystem">
                            <div className="spacing">
                                <label for="group_name" className="label">Guild name</label>
                                <input name="group_name" className="registerinput"></input>
                            </div>
                            <div className="spacing">
                                <label for="group_pw" className="label">Guild password</label>
                                <input name="group_pw" className="registerinput"></input>
                            </div>
                            <div className="spacing">
                                <label for="description" className="label">Guild mission</label>
                                <input name="description" className="registerinput"></input>
                            </div>
                            <div className="spacing">
                                <label for="weekly_exercise_sessions" className="label">Weekly exercise sessions</label>
                                <input name="weekly_exercise_sessions" className="registerinput"></input>
                            </div>
                            <div className="spacing">
                                <label for="weekly_cheats" className="label">Cheat meals per week</label>
                                <input name="weekly_cheats" className="registerinput"></input>
                            </div>
                            <div className="spacing">
                                <button type="submit" id="regsubmit">Let's get going!</button>
                                <p>Invite your friends to join your guild so you can support one another in achieving the guild mission!</p>
                                <p>All they need is the guild name and password so they can log in too!</p>
                            </div>
                          </form>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = addecosystemform;