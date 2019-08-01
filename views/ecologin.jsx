var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head/>
        <body>
          <h2>Ecosystem Log-in page!</h2>
          <form method="POST" action="/logintoecosystem">
            <div><input name="group_name" placeholder="Group Name"></input></div>
            <div><input name="group_pw" placeholder="Password"></input></div>
            <div><button type="submit">Log In </button></div>
          </form>
          <a href="/addecosystem">Don't have the keys to log into ecosystem? Create your own here!</a>
        </body>
      </html>
    );
  }
}

module.exports = Login;