import axios from "axios";
import { takeLatest, put } from 'redux-saga/effects';

function* fetchFavorite(action) {
    try {
        yield console.log('fetchFavorite saga wired!');
        
        
    } catch(error) {
        console.log('error in fetchFavorites', error);
        
    }
}

function* favoriteSaga() {
    yield takeLatest('FETCH_FAVORITE', fetchFavorite);
}

export default favoriteSaga;