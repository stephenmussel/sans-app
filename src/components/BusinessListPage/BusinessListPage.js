import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BusinessListItem from '../BusinessListItem/BusinessListItem';

function BusinessList() {

  const dispatch = useDispatch();
  const businessList = useSelector(store => store.business);
  const history = useHistory();

  useEffect(() => {
    console.log('in useEffect, BusinessListPage');
    // fetches all businesses on page load
    const action = {type: 'FETCH_BUSINESS'};
    dispatch(action)
  }, []);

  return(
    <div>
      <h1>Business List Page</h1>
      {/* <p>{JSON.stringify(businessList)}</p> */}
      <div>
        <button>Add Business</button>
      </div>
      <br />
      {businessList.map(business => (
        <BusinessListItem 
          key={business.id} 
          business={business}
        />
      ))}
    </div>
  )
}
export default BusinessList;