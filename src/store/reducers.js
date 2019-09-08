import * as TYPE from './actions';
import { videoInfo } from './data';

const initialState = {
	list: [],
	searchList: [],
	searchKey: ''
};

export default function video(state, actions) {
	console.log('test');
	if (actions.type === undefined) {
		return initialState;
	}
	switch (actions.type) {
		case TYPE.SET_LIST:
			return Object.assign({}, state, { list: videoInfo.shows });
		case TYPE.GET_SEARCH_LIST:
			const searchList = state.list.filter((item) => item.title.includes(state.searchKey));
			return Object.assign({}, state, { searchList: searchList });
		case TYPE.SET_SEARCH_KEY:
			return Object.assign({}, state, { searchKey: actions.key });
		default:
			return state;
	}
}
