import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import businessSaga from '../../redux/sagas/business.saga';

function BusinessDetails() {

    const[selectedBusiness, setSelectedBusiness] = useState({});
    const details = useSelector(store => store.businessDetails);
    const businessList = useSelector(store => store.businessList);
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        getBusinessInfo();
      }, []);

      const getBusinessInfo = () => {
        console.log('in getBusinessInfo');
        // fetches all details from details.saga
        const action = {type: 'FETCH_DETAILS', payload: id};
        dispatch(action);
        whatBusiness();
      }

    const whatBusiness = () => {
        businessList.map((each) => {
            console.log(each.id);
            if(`${each.id}` === id) {
                return selectedBusiness(each)
            }
        })
    }

    return(
        <div>
            <h1>Details of Selected Business</h1>
            <p>{JSON.stringify(details)}</p>
        </div>
    )
}

export default BusinessDetails;