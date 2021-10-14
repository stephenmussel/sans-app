import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function BusinessList() {

  const dispatch = useDispatch();
  const businessList = useSelector(store => store.businessList);
  const history = useHistory();

  useEffect(() => {
    console.log('in useEffect, BusinessListPage');
    // fetches all businesses on page load
    const action = {type: 'FETCH_BUSINESS'};
    dispatch(action)
  }, []);

  const viewBusinessDetails = () => {
    console.log('clicked on image');
    history.push('/details')
  }

  return(
    <div>
      <h1>Business List Page</h1>
      {/* <p>{JSON.stringify(businessList)}</p> */}
      {businessList.map(business => {
        return(
          <div onClick={viewBusinessDetails} key={business.id}>
            <img src={business.image_url} />
            <h3>{business.name}</h3>
          </div>
        );
      })}
    </div>
  )
}
export default BusinessList;