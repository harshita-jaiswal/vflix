import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	selectedVideoInfo: state && state.selectedVideoInfo
});

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: ''
		};
	}

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=dbdb427f&i=${this.props.selectedVideoInfo.imdbID}`)
			.then((response) => {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}
				response.json().then((data) => {
					this.setState({
						rating: data && data.Ratings[0].Value
					});
				});
			})
			.catch(function(err) {
				console.log('Fetch Error :-S', err);
			});
	}

	render() {
		return (
			<div>
				<iframe
					title={this.props.selectedVideoInfo.title}
					src={`https://www.youtube-nocookie.com/embed/${this.props.selectedVideoInfo
						.trailer}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0`}
					frameBorder="0"
					allowFullScreen=""
					height="450"
					width="100%"
				/>
				<div className="video">
					<div className="video_title-rating">
						<p className="video_title">{this.props.selectedVideoInfo.title}</p>
						<span>Ratings: {this.state.rating}</span>
					</div>
					<p className="video_yr">{this.props.selectedVideoInfo.year}</p>
					<p className="video_desc">{this.props.selectedVideoInfo.description}</p>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(Detail);
