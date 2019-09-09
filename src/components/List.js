import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchVideoList, setSearchKey } from '../store/actions';

const mapStateToProps = (state) => ({
	list: state && state.list,
	searchKey: state && state.searchKey,
	searchList: state && state.searchList
});

const mapDispatchToProps = (dispatch) => {
	return {
		setSearchKey: (searchKey) => dispatch(setSearchKey(searchKey)),
		getSearchVideoList: () => dispatch(getSearchVideoList())
	};
};

export class List extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.removeSearch = this.removeSearch.bind(this);
	}

	removeSearch() {
		this.props.setSearchKey('');
	}

	render() {
		console.log('store-- header', this.props);
		return (
			<div className="App-body">
				{this.props.searchKey && this.props.searchKey.length ? (
					<div className="search-info">
						<span>{this.props.searchKey}</span>
						<span onClick={this.removeSearch} className="clear">
							Clear
						</span>
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
