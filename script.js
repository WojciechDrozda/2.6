let Counter = React.createClass({
	propType: {
		name: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('div', {}, 'Click Here to increment or decrement'),
			React.createElement('button', {onClick: this.increment, className: 'btn btn-success'}, 'Increment'),
			React.createElement('button', {onClick: this.decrement, className: 'btn btn-danger'}, 'Decrement'),
			React.createElement('button', {className: 'btn btn-primary'}, this.props.name + ' ' + this.state.counter),
			);
	}
});
let element = React.createElement('div', {},
	React.createElement(Counter, {name: 'Licznik: '}),
	React.createElement(Counter, {name: 'Licznik: '})
	);
ReactDOM.render(element, document.getElementById('app'));