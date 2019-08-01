var React = require("react");

class foodpage extends React.Component {
  render() {

    let time = this.props.food.creation_info;
    let foodId = this.props.foodId;
    let cheat = this.props.food.cheat;
    let editURL = `/editfoodpost/${foodId}/?_method=put`
    let deleteURL = `/deletefoodpost/${foodId}/?_method=delete`

    return (
          <html>

          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>

            <head />
            <body>
                <div className = "container">
                    <div className="row">
                        <h2>Meal post to be edited</h2>
                    </div>
                    <div className="row">
                            <div>
                                <form method="POST" action= {editURL}>
                                    <p>
                                        <input name="title" value={this.props.food.title}></input>
                                    </p>
                                    <p>
                                        <input name="photo_url" value={this.props.food.photo_url}></input>
                                    </p>
                                    <p>
                                        <input name="cheat" value={cheat.toString()}></input>
                                    </p>
                                    <button type="submit">Edit post</button>
                                </form>
                                <form method="POST" action={deleteURL}>
                                    <button type="submit">Delete post</button>
                                </form>
                            </div>
                    </div>
                </div>
            </body>
          </html>
    );
  }
}

module.exports = foodpage;