import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function BusinessDetails() {

    const[selectedBusiness, setSelectedBusiness] = useState({});
    const details = useSelector(store => store.businessDetails)
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        console.log('in useEffect, BusinessDetails');
        // fetches all businesses from business.saga
        const action = {type: 'FETCH_DETAILS', payload: id};
        dispatch(action)
      }, []);


    return(
        <div>
            <h1>Details of Selected Business</h1>
        </div>
    )
}

export default BusinessDetails;