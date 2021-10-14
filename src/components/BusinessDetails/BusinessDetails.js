import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';

function BusinessDetails() {

    const businessDetails = useSelector(store => store.businessDetails);
    const allParams = useParams();
    const businessId = allParams.id;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS', payload: {id: businessId}});
    }, [businessId]);

    return(
        <div>
            <h1>Details for {businessDetails.name}</h1>
            <h3>businessDetails: </h3>
                <p>{JSON.stringify(businessDetails)}</p>
            <h3>allParams: </h3>
                <p>{JSON.stringify(allParams)}</p>
        </div>
    )
}

export default BusinessDetails;