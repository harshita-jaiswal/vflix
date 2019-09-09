import React, { Component } from 'react';
import Header from 'components/Header';
import List from 'components/List/List';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<Header />
				</header>
				<List />
			</div>
		);
	}
}
