import React, { Component } from 'react';
import { connect } from 'react-redux';
import MasonryLayout from 'react-masonry-layout';
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
			console.log(nextProps.featureReducer.activeFeature);
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
				<div style={{overflowX: 'hidden'}}>
					<MasonryLayout
						id="items"
						style={{fontWeight: 'bold'}}
						infiniteScroll={() => {}}
						infiniteScrollDisabled={true} >

						{
							this.props.photoReducer.data.photos.map((v, i) => {
								return (
									<div
										key={i}
										src={v.image_url}
										style={{
											width: 200,
											display: 'block',
										}}
									>
										<img src={v.image_url} style={{width: '100%'}} />
									</div>
								);
							})
						}

					</MasonryLayout>
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
