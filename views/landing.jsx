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
                    <div className = "col-4 offset-4">
                            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" id="login">Log In</button>

                      <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">

                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Log in to GUIL:DS</h4>
                            </div>
                            <div class="modal-body">
                                <form className="form-horizontal" method="POST" action="/home" onSubmit="return validateForm()">
                                <div className="form-group">
                                    <label for="Username" class="col-sm-2 control-label" id="usernamelabel">Username</label>
                                    <input type="Username" name="username"></input>
                                </div>
                                <div className="form-group">
                                    <label for="Password" class="col-sm-2 control-label" id="passwordlabel">Password</label>
                                    <input type="Password" name="password"></input>
                                </div>
                                <div >
                                    <button type="submit">Log In</button>
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <a href="/register" id="register">Not a user yet? Register here</a>
                            </div>
                          </div>

                        </div>
                      </div>
                </div>
                    </div>

                <div className = "row-fluid">
                    <div className = "col-4 offset-4" id="register-holder">
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