var React = require("react");
var cloudinary = require('cloudinary');
var Layout = require('./layouts/default');

class foodpage extends React.Component {
  render() {

    let time = this.props.food.creation_info;
    let foodId = this.props.foodId;
    let cheat = this.props.food.cheat;
    let publicId = this.props.food.photo_url;
    var imgUrl = cloudinary.url(`${publicId}`, { width: 250, height: 250});
    let editURL = `/editfoodpost/${foodId}/?_method=put`
    let deleteURL = `/deletefoodpost/${foodId}/?_method=delete`

    return (
        <Layout>
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
                                    <img src = {imgUrl}></img>
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
        </Layout>
    );
  }
}

module.exports = foodpage;