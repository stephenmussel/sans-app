import axios from "axios";
import { takeLatest, put } from 'redux-saga/effects';

function* fetchFavorite(action) {
    try {
        yield console.log('fetchFavorite saga wired!');
        const favoriteResponse = yield axios.get('/api/favorite');
        yield console.log('favoriteResponse.data is: ', favoriteResponse.data);
        yield put({type: 'SET_FAVORITE', payload: favoriteResponse.data[0]})
    } catch(error) {
        console.log('error in fetchFavorites', error);
        
    }
}

function* favoriteSaga() {
    yield takeLatest('FETCH_FAVORITE', fetchFavorite);
}

export default favoriteSaga;