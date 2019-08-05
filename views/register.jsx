var React = require("react");

class register extends React.Component {
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
                    <div className="col-6 offset-3">
                        <img className="img-fluid" src= "/pics/guildslogo.png" id="reglogo"></img>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="col-xs-6 offset-3 col-lg-6 offset-lg-3" id="toprow">
                        <h2>Create GUIL:DS account</h2>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="col-xs-8 offset-xs-2 col-lg-6 offset-lg-3">
                        <form method="POST" action="/welcome">
                            <div className="spacing">
                                <label for="name" className="label">Name</label>
                                <input name="name" className="registerinput" required></input>
                            </div>
                            <div className="spacing">
                                <label for="username" className="label">Username</label>
                                <input name="username" className="registerinput" required></input>
                            </div>
                            <div className="spacing">
                                <label for="password" className="label">Password</label>
                                <input name="password" className="registerinput" required></input>
                            </div>
                            <div className="spacing">
                                <label for="email" className="label">Email</label>
                                <input name="email" className="registerinput" required></input>
                            </div>
                            <div className="spacing">
                                <button type="submit" id="regsubmit">Sign up</button>
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

module.exports = register;