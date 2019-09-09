import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchVideoList, setSearchKey } from 'store/actions';
import ListItem from './components/ListItem';

const mapStateToProps = (state) => ({
	list: state && state.list,
	searchKey: state && state.searchKey,
	searchList: state && state.searchList,
	finalList: state && state.searchKey && state.searchKey.length ? state && state.searchList : state && state.list
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
		this.info = {
			description:
				'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
			imdbID: 'tt1856010',
			poster: 'hoc.jpg',
			title: 'House of Cards',
			trailer: 'NTzycsqxYJ0',
			year: '2013–'
		};
		this.state = {
			videoList: []
		};
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
					{this.props.finalList &&
						this.props.finalList.map((item) => {
							return <ListItem info={item} />;
						})}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
