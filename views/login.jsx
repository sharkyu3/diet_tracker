var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head/>
        <body>
          <h2>NOM CHOMP!</h2>
          <form method="POST" action="/home">
            <div><input name="username" placeholder="Username"></input></div>
            <div><input name="password" placeholder="Password"></input></div>
            <div><button type="submit">Log In </button></div>
          </form>
          <a href="/register">Not a user yet? Register here</a>
        </body>
      </html>
    );
  }
}

module.exports = Login;