var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>GUIL:DS</title>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/css/style.css"/>
            </head>
            <body>
                <ul className="nav nav-pills">
                  <li role="presentation" className="active"><a href="/home">Home</a></li>
                  <li role="presentation"><a href="/home:id">Profile</a></li>
                  <li role="presentation"><a href="/logout">Logout</a></li>
                </ul>
            {this.props.children}
            <script type="text/javascript" src="/script.js"></script>
            </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;