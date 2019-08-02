var React = require("react");
var Layout = require('./layouts/default');

class addmealform extends React.Component {
  render() {
    return (
        <Layout>
          <h2>What did you CHOMP on?</h2>
          <form encType="multipart/form-data" method="POST" action="/postmeal/success">
            <div><input name="title" placeholder="title"></input></div>
            <div><input type = "file" name="photo_url" placeholder="Photo URL"></input></div>
            <div><input name="cheat" placeholder="Cheat"></input></div>
            <div><button type="submit">Add Meal</button></div>
          </form>
        </Layout>
    );
  }
}

module.exports = addmealform;