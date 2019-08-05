var React = require("react");

class Landing extends React.Component {
  render() {
    return (
      <html>
        <title>GUIL:DS</title>
        <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <head />
        <body>
            <div className="container-fluid">
                <div className = "row-fluid">
                        <img className="img-fluid" src= "/pics/guildslogo.png" id="fulllogo"></img>
                </div>
                <div className = "row-fluid">
                    <div className = "col-xs-4 offset-4">
                      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" id="login">Log In</button>
                      <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">

                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Log in to GUIL:DS</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" method="POST" action="/home">
                                <div className="form-group">
                                    <label for="Username" className="col-xs-3 control-label" id="usernamelabel">Username</label>
                                    <input type="Username" name="username" required></input>
                                </div>
                                <div className="form-group">
                                    <label for="Password" className="col-xs-3 control-label" id="passwordlabel">Password</label>
                                    <input type="Password" name="password" required></input>
                                </div>
                                <div >
                                    <button type="submit">Log In</button>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <a href="/register" id="register">Not a user yet? Register here</a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                </div>

                <div className = "row-fluid">
                    <div className = "col-xs-12" id="register-holder">
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