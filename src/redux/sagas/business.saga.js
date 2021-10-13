import axios from "axios";
import { takeLatest, put } from 'redux-saga/effects';

function* fetchBusiness() {
    try {
        console.log('fetchBusiness saga wired!');
        
    } catch(error) {
        console.log('error in fetchBusiness', error);   
    }
}

function* businessSaga() {
    yield takeLatest('FETCH_BUSINESS', fetchBusiness);
}

export default businessSaga;