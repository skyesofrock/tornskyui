var React = require('react');
var ReactDOM = require('react-dom');
var $ = require ('jquery');

var Card = require('./components/Card.jsx');

var networks = [
	{'id': '1', 'title': 'Facebook', 'profile': 'img/prof1.jpg', 'image': 'img/no1.jpg', 'content': 'This is a test.'},
	{'id': '2', 'title': 'Twitter', 'profile': 'img/prof2.jpg', 'image': 'img/no2.jpg', 'content': 'This is still a test.'},
	{'id': '3', 'title': 'Google+', 'image': '', 'content': 'Yep, still a test.'}
];

var List = React.createClass({
	render: function () {
		var listItems = networks.map(function (network) {
			return <Card key={network.id} title={network.title} profile={network.profile} image={network.image} content={network.content} />;
		});

		return <div>{listItems}</div>;
	}
});

ReactDOM.render(
	<List />,
	document.getElementById('card')
);
