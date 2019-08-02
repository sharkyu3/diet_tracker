var React = require("react");

class Landing extends React.Component {
  render() {
    return (
      <html>
      <title>GUIL:DS</title>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <head />
        <body>
            <div className="container-fluid">
                <div className = "row">
                    <img className="img-fluid" src= "/pics/guildslogo.png" id="fulllogo" alt="GUIL:DR logo"></img>
                </div>
                <div className = "row">
                    <div className = "col-6 offset-3" id="login-holder">
                            <a href="/login" id="login">Log in</a>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-6 offset-3" id="register-holder">
                            <a href="/register" id="register">Not a user yet? Register here</a>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Landing;