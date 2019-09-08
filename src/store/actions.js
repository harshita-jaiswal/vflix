export const SET_LIST = 'setList';
export const GET_SEARCH_LIST = 'getSearchList';
export const SET_SEARCH_KEY = 'setSearchKey';

export function setVideoList() {
	return { type: SET_LIST };
}

export function getSearchVideoList() {
	return { type: GET_SEARCH_LIST };
}

export function setSearchKey(searchKey) {
	return { type: SET_SEARCH_KEY, key: searchKey };
}
