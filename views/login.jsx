var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <title>GUIL:DS</title>
            <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <head/>
        <body>
            <div className="container-fluid">
                <div className="row">
                  <h2>Log in to GUIL:DS</h2>
                </div>
                <div className = "row">
                      <form className="form-horizontal" method="POST" action="/home">
                        <div className="form-group">
                            <input type="Username" name="username" placeholder="Username"></input>
                        </div>
                        <div className="form-group">
                            <input type="Password" name="password" placeholder="Password"></input>
                        </div>
                        <div >
                            <button type="submit">Log In </button>
                        </div>
                      </form>
                </div>
                <div className="row">
                    <a href="/register">Not a user yet? Register here</a>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;