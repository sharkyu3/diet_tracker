var React = require("react");

class register extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>Create NOM CHOMP account</h2>
          <form method="POST" action="/welcome">
            <div><input name="name" placeholder="Name"></input></div>
            <div><input name="username" placeholder="Username"></input></div>
            <div><input name="password" placeholder="Password"></input></div>
            <div><input name="email" placeholder="Email Address"></input></div>
            <div><button type="submit">Sign up</button></div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = register;