import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';

function BusinessDetails() {

    const businessDetails = useSelector(store => store.businessDetails);
    const dispatch = useDispatch();
    const allParams = useParams();
    const businessId = allParams.id;

    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS', payload: {id: businessId}});
    }, [businessId]);

    return(
        <div>
            <h1>Details for {businessDetails[0].name}</h1>
            {/* {JSON.stringify(businessDetails)} */}
            <p>{businessDetails[0].description}</p>
        </div>
    )
}

export default BusinessDetails;