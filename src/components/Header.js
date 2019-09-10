import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchVideoList, setSearchKey, showDetailView } from 'store/actions';

const mapDispatchToProps = (dispatch) => {
	return {
		setSearchKey: (searchKey) => dispatch(setSearchKey(searchKey)),
		getSearchVideoList: () => dispatch(getSearchVideoList()),
		showDetailView: (status) => dispatch(showDetailView(status))
	};
};

const mapStateToProps = (state) => ({
	detailView: state && state.detailView
});

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKey: ''
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.submit = this.submit.bind(this);
	}
	handleUserInput(e) {
		this.setState({
			searchKey: e.target.value
		});
	}
	submit(e) {
		e.preventDefault();
		if (e.key === 'Enter') {
			this.props.setSearchKey(this.state.searchKey);
			this.props.getSearchVideoList();
			this.setState({
				searchKey: ''
			});
		}
	}

	render() {
		return (
			<header className="App-header">
				<p className="title">vFlix</p>
				{!this.props.detailView ? (
					<input
						placeholder="Search"
						className="search"
						onChange={this.handleUserInput}
						value={this.state.searchKey}
						onKeyUp={this.submit}
						type="text"
					/>
				) : (
					<span onClick={() => this.props.showDetailView(false)} className="back-btn">
						Back
					</span>
				)}
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
