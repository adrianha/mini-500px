import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../redux/actions';

class Main extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(fetchPhotos({
			feature: this.props.featureReducer.activeFeature,
		}));
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.featureReducer.activeFeature !== nextProps.featureReducer.activeFeature) {
			this.props.dispatch(fetchPhotos({
				feature: nextProps.featureReducer.activeFeature,
			}));
		}
	}

  render() {
		if (this.props.photoReducer.isFetching) {
			return (
				<div>Fetching Photo...</div>
			);
		} else {
			return (
				<div style={{textAlign: 'center'}}>
					{
				    this.props.photoReducer.data.photos.map((v, i) => {
							return <img key={i} src={v.image_url} style={{width: 200, margin: 5}} />
						})
					}
				</div>
			);
		}
  }
}

function mapStateToProps(state) {
	return {
		featureReducer: state.featureReducer,
		photoReducer: state.photoReducer,
	};
}

export default connect(mapStateToProps)(Main);
