import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeatureItem from './FeatureItem';
import { changeActiveFeature } from '../redux/actions';

class Features extends Component {
  onChangeFeature(activeFeature) {
    this.props.dispatch(changeActiveFeature(activeFeature));
  }

  render() {
    return (
      <div className="features">
        {
          this.props.featureReducer.features.map((feature) => {
            return (
              <FeatureItem
                key={feature.id}
                feature={feature}
                active={feature.id === this.props.featureReducer.activeFeature}
                onClick={this.onChangeFeature.bind(this)} />
            );
          })
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    featureReducer: state.featureReducer,
  };
}

export default connect(mapStateToProps)(Features);
