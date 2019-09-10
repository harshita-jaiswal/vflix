import React, { Component } from 'react';
import Header from 'components/Header';
import List from 'components/List/List';
import Detail from 'components/Detail';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>{!this.props.detailView ? <List /> : <Detail />}</main>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	detailView: state && state.detailView
});

export default connect(mapStateToProps, null)(App);
