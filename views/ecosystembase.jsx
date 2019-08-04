var React = require("react");

class ecoLanding extends React.Component {
  render() {
    return (
      <html>
        <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <head />
        <body>
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col-xs-6 offset-3">
                        <img className="img-fluid" src= "/pics/applestack.png" id="stacklogo"></img>
                    </div>
                </div>
                <div className="row-fluid" id="ecobutton-holder">
                    <div className = "col-xs-4 offset-4">
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" id="login">Join your guild</button>
                      <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Join your guild!</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" method="POST" action="/logintoecosystem">
                                <div className="form-group">
                                    <label for="group_name" class="col-sm-2 control-label" id="usernamelabel">Guild name</label>
                                    <input type="group_name" name="group_name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="Password" class="col-sm-2 control-label" id="passwordlabel">Password</label>
                                    <input type="Password" name="group_pw"></input>
                                </div>
                                <div >
                                    <button type="submit">Join</button>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <a href="/addecosystem" id="register">Not part of a guild yet? Set-up your own here</a>
                            </div>
                          </div>

                      </div>
                    </div>

                    </div>
                    </div>
                    <div className="row-fluid">
                        <div className = "col-xs-4 offset-4" id="register-holder">
                            <a href="/addecosystem" className="eco">Not part of a guild yet? Set-up your own here</a>
                        </div>
                    </div>
                </div>

        </body>
      </html>
    );
  }
}

module.exports = ecoLanding;