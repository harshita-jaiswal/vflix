import * as TYPE from './actions';
import { videoInfo } from './data';

const initialState = {
	list: [],
	searchList: [],
	searchKey: '',
	detailView: false,
	selectedVideoInfo: null
};

export default function video(state = initialState, actions) {
	switch (actions.type) {
		case TYPE.SET_LIST:
			return Object.assign({}, state, { list: videoInfo.shows });
		case TYPE.GET_SEARCH_LIST:
			const searchList = state.list.filter((item) => item.title.includes(state.searchKey));
			return Object.assign({}, state, { searchList: searchList });
		case TYPE.SET_SEARCH_KEY:
			return Object.assign({}, state, { searchKey: actions.key });
		case TYPE.SHOW_DETAIL:
			return Object.assign({}, state, { detailView: actions.key });
		case TYPE.SELECT_VIDEO_INFO:
			return Object.assign({}, state, { selectedVideoInfo: actions.key });
		default:
			return state;
	}
}
