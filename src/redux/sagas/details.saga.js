import axios from "axios";
import { takeLatest, put } from 'redux-saga/effects';

function* fetchDetails(action) {
    try {
        yield console.log('fetchDetails saga wired!');
        // yield console.log(action);
        yield console.log(action.payload);
        const business = action.payload;
        const businessDetails = yield axios.get(`/api/business/${business.id}`);
        console.log('this is businessDetails', businessDetails.data);
        yield put({type: 'SET_DETAILS', payload: businessDetails.data})
    } catch(error) {
        console.log('error in fetchDetails', error);
    }
}

function* detailsSaga() {
    yield takeLatest('FETCH_DETAILS', fetchDetails);
}

export default detailsSaga;