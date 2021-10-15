import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* fetchBusiness() {
    try {
        yield console.log('fetchBusiness saga wired!');
        const businessResponse = yield axios.get('/api/business');
        yield put({type: 'SET_BUSINESS', payload: businessResponse.data});
        
    } catch(error) {
        console.log('error in fetchBusiness', error);   
    }
}

function* postBusiness(action) {
    try {
        console.log('postBusiness saga wired!');
        

    } catch(error) {
        console.log('error in postBusiness', error);
        
    }
}

function* businessSaga() {
    yield takeLatest('FETCH_BUSINESS', fetchBusiness);
    yield takeLatest('POST_BUSINESS', postBusiness);
}

export default businessSaga;