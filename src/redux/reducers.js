import { combineReducers } from 'redux';
import * as types from './actionType';

const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case types.MEMBER.start:
			return { ...state };

		case types.MEMBER.success:
			return { ...state, members: action.payload };

		case types.MEMBER.error:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return { ...state };

		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };

		case types.YOUTUBE.error:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return { ...state };

		case types.FLICKR.success:
			return { ...state, flickr: action.payload };

		case types.FLICKR.error:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const newsReducer = (state = { news: [] }, action) => {
	switch (action.type) {
		case types.NEWS.start:
			return { ...state };

		case types.NEWS.success:
			return { ...state, news: action.payload };

		case types.NEWS.error:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	memberReducer,
	youtubeReducer,
	flickrReducer,
	newsReducer,
});

export default reducers;
