import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showDetailView, selectedVideoDetail } from 'store/actions';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.showDetail = this.showDetail.bind(this);
	}

	showDetail() {
		this.props.showDetailView(true);
		this.props.selectedVideoDetail(this.props.info);
	}

	render() {
		return (
			<div onClick={this.showDetail} className="card">
				<div className="img_container">
					<img className="card_img" src={require(`assets/img/${this.props.info.poster}`)} alt="poster" />
				</div>
				<div className="card_info">
					<p>{this.props.info.title}</p>
					<p>{this.props.info.year}</p>
					<p>{this.props.info.description}</p>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showDetailView: (status) => dispatch(showDetailView(status)),
		selectedVideoDetail: (info) => dispatch(selectedVideoDetail(info))
	};
};

export default connect(null, mapDispatchToProps)(ListItem);
