import React, { Component } from 'react';
import Header from 'components/Header';
import List from 'components/List/List';
import Detail from 'components/Detail';
import { connect } from 'react-redux';
import { setVideoList } from 'store/actions';

class App extends Component {
	componentDidMount() {
		this.props.setVideoList();
	}
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

const mapDispatchToProps = (dispatch) => {
	return {
		setVideoList: () => dispatch(setVideoList())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
