import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

function BusinessList() {

  const dispatch = useDispatch();
  const businessList = useSelector(store => store.businessList);

  useEffect(() => {
    console.log('in useEffect');
    
    const action = {type: 'FETCH_BUSINESS'};
    dispatch(action)
  }, []);

  return(
    <div>
      <h1>Business List Page</h1>
      {/* <p>{JSON.stringify(businessList)}</p> */}
      {businessList.map((each) => (
        <div>
          <img src={each.image_url} />
          <h3>{each.name}</h3>
        </div>

      ))}
    </div>
  )
}
export default BusinessList;