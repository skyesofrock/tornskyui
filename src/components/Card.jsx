//jshint esversion: 6

const React = require('react');
const Radium = require('radium');

const styles = {
	base: {
		color: 'grey',
		fontFamily: 'sans-serif',
		backgroundColor: '#eeeeee',
		maxWidth: 400,
		width: 400,
		height: 'auto',
		maxHeight: 400,
		padding: 4,
		margin: 16,
		borderRadius: 4,
		border: '2px solid grey',
		transition: 'all 0.1s ease-in-out',

		':hover': {
			boxShadow: '0 5px 10px #888888',
			transform: 'scale(1.02)'
		}
	},
	wrapper: {
		width: '100%',
		height: '224px',
		backgroundColor: '#f8f8f8',
		borderRadius: 3,
		overflow: 'hidden'
	},
	image: {
		width: '100%'
	},
	content: {
		display: 'flex',
		padding: '0 12px',
		overflow: 'hidden',
		// backgroundColor: 'red',
		maxHeight: 110,
		textOverflow: 'ellipsis'
	},
	text: {
		wordWrap: 'break-word',
		paddingBottom: 16,
		// backgroundColor: 'blue',
		textOverflow: 'ellipsis'
	},
	icon: {
		margin: '16px 16px 16px 0',
		width: 32,
		height: 32,
		borderRadius: 4,
		backgroundColor: 'red',
		flexShrink: 0
	}
};

var Card = React.createClass({

	render: function () {
		return (
			<div style={[styles.base]}>
				<div style={[styles.wrapper]}>
					<img src={this.props.image} style={[styles.image]}/>

				</div>
				<div style={[styles.content]}>
					<div style={[styles.icon]}>
						<img src={this.props.profile}/>
					</div>
					<div style={[styles.text]}>
						<h2>{this.props.title}</h2>
						<p>{this.props.content}</p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Radium(Card);
