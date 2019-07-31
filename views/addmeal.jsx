var React = require("react");

class addmealform extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>What did you CHOMP on?</h2>
          <form method="POST" action="/postmeal/success">
            <div><input name="title" placeholder="title"></input></div>
            <div><input name="photo_url" placeholder="Photo URL"></input></div>
            <div><input name="cheat" placeholder="Cheat"></input></div>
            <div><button type="submit">Add Meal</button></div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = addmealform;