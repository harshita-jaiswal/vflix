export const SET_LIST = 'setList';
export const GET_SEARCH_LIST = 'getSearchList';
export const SET_SEARCH_KEY = 'setSearchKey';
export const SHOW_DETAIL = 'showDetail';
export const SELECT_VIDEO_INFO = 'selectedVideoInfo';

export function setVideoList() {
	return { type: SET_LIST };
}

export function getSearchVideoList() {
	return { type: GET_SEARCH_LIST };
}

export function setSearchKey(searchKey) {
	return { type: SET_SEARCH_KEY, key: searchKey };
}

export function showDetailView(status) {
	return { type: SHOW_DETAIL, key: status };
}

export function selectedVideoDetail(detail) {
	return { type: SELECT_VIDEO_INFO, key: detail };
}
