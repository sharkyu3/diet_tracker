var React = require("react");

class ecoLanding extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>Ecosystems!</h2>
            <a href="/addecosystem">Create new ecosystem</a>
            <a href="/logintoecosystem">Join an existing ecosystem</a>
        </body>
      </html>
    );
  }
}

module.exports = ecoLanding;