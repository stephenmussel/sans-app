import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';

function BusinessDetails() {

    const businessDetails = useSelector(store => store.businessDetails);
    const dispatch = useDispatch();
    const allParams = useParams();
    const businessId = allParams.id;

    useEffect(() => {
        dispatchEvent({type: 'FETCH_DETAILS', payload: {id: businessId}});
    }, [businessId]);

    return(
        <div>
            <h1>Details for Selected Business</h1>
        </div>
    )
}

export default BusinessDetails;