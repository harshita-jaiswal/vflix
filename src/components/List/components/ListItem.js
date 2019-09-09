import React, { Component } from 'react';

export default class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card">
				<img className="card_img" src={require(`assets/img/${this.props.info.poster}`)} alt="poster" />
				<div className="card_info">
					<p>{this.props.info.title}</p>
					<p>{this.props.info.year}</p>
					<p>{this.props.info.description}</p>
				</div>
			</div>
		);
	}
}
