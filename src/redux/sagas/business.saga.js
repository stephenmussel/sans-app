import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// GETs all businesses
function* fetchBusiness() {
    try {
        // yield console.log('fetchBusiness saga wired!');
        const businessResponse = yield axios.get('/api/business');
        yield put({type: 'SET_BUSINESS', payload: businessResponse.data}); 
    } catch(error) {
        console.log('error in fetchBusiness', error);   
    }
}

// POSTs new business
function* postBusiness(action) {
    try {
        // yield console.log('postBusiness saga wired!');
        // yield console.log('action from postBusiness', action);
        yield axios.post('/api/business', action.payload);        
        yield put({type: 'SET_BUSINESS', payload: business.data}); 
        yield console.log(businessList);
        yield put ({type: 'FETCH_BUSINESS'});
    } catch(error) {
        console.log('error in postBusiness', error);  
    }
}

function* deleteBusiness(action) {
    try {
        yield console.log('deleteBusiness wired!');
        

    } catch(error) {
        console.log('error in deleteBusiness', error); 
    }
}

function* businessSaga() {
    yield takeLatest('FETCH_BUSINESS', fetchBusiness);
    yield takeLatest('POST_BUSINESS', postBusiness);
    yield takeLatest('DELETE_BUSINESS', deleteBusiness);
}

export default businessSaga;