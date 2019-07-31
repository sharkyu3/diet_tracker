var React = require("react");

class Landing extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>NOM CHOMP!</h2>
            <a href="/login">Log in</a>
            <a href="/register">Not a user yet? Register here</a>
        </body>
      </html>
    );
  }
}

module.exports = Landing;