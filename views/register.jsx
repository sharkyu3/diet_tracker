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
                    <div className="col-6 offset-3">
                        <h2>Create GUIL:DS account</h2>
                    </div>
                </div>
            </div>

          <form method="POST" action="/welcome">
            <div>
                <label for="name" class="label">Name</label>
                <input name="name"></input>
            </div>
            <div>
                <label for="username" class="label">Username</label>
                <input name="username"></input>
            </div>
            <div>
                <label for="password" class="label">Password</label>
                <input name="password"></input>
            </div>
            <div>
                <label for="email" class="label">Email</label>
                <input name="email"></input>
            </div>
            <div><button type="submit">Sign up</button></div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = register;