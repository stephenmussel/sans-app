import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

function BusinessList() {

  const dispatch = useDispatch();
  const businessList = useSelector(store => store.businessReducer);

  useEffect(() => {
    console.log('in useEffect');
    
    const action = {type: 'FETCH_BUSINESS'};
    dispatch(action)
  }, []);

  return(
    <div>
      <h1>Business List Page</h1>
    </div>
  )
}
export default BusinessList;