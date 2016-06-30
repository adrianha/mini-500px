import * as ActionTypes from '../constants';

const initialState = {
  features: [
    {
      id: 'popular',
      name: 'Popular',
    },
    {
      id: 'highest_rated',
      name: 'Highest Rated',
    },
    {
      id: 'upcoming',
      name: 'Upcoming',
    },
    {
      id: 'editors',
      name: 'Editors',
    },
    {
      id: 'fresh_today',
      name: 'Fresh Today',
    },
    {
      id: 'fresh_yesterday',
      name: 'Fresh Yesterday',
    },
    {
      id: 'fresh_week',
      name: 'Fresh Week',
    },
  ],
  activeFeature: 'popular',
};

const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_FEATURE:
      return Object.assign({}, state, {
        activeFeature: action.activeFeature,
      });

    default:
      return state
  }
}

export default featureReducer;
