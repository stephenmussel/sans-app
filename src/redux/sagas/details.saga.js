import axios from "axios";
import { takeLatest, put } from 'redux-saga/effects';

function* fetchDetails() {
    try {
        yield console.log('fetchDetails saga wired!');
        
    } catch(error) {
        console.log('error in fetchDetails', error);
    }
}

function* detailsSaga() {
    yield takeLatest('SET_DETAILS', fetchDetails);
}

export default detailsSaga;