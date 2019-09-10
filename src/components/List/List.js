import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchVideoList, setSearchKey } from 'store/actions';
import ListItem from './components/ListItem';

const mapStateToProps = (state) => ({
	list: state.list,
	searchKey: state.searchKey,
	searchList: state.searchList,
	finalList: state.searchKey && state.searchKey.length ? state.searchList : state.list
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
		this.removeSearch = this.removeSearch.bind(this);
	}

	removeSearch() {
		this.props.setSearchKey('');
	}

	render() {
		return (
			<div className="App-body">
				{this.props.searchKey && this.props.searchKey.length ? (
					<div className="search-info">
						<span>Search: '{this.props.searchKey}'</span>
						<span onClick={this.removeSearch} className="clear">
							Clear
						</span>
					</div>
				) : (
					''
				)}
				<div className="list">
					{this.props.finalList.length ? (
						this.props.finalList.map((item, index) => {
							return <ListItem info={item} key={index} />;
						})
					) : (
						<p className="no-res">
							Oops!! No Result.<span>😔</span>
						</p>
					)}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
