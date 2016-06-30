import React from 'react';

const FeatureItem = (props) => {
  return (
    <a
      key={props.feature.id}
      href="#"
      className={`pseudo button ${props.active ? 'active':''}`}
      onClick={props.onClick.bind(this, props.feature.id)}
    >
      {props.feature.name}
    </a>
  );
};

export default FeatureItem;
