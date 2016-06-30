import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Features from './Features';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Features />
				<div style={{margin: 10}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
