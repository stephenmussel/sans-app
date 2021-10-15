import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

function BusinessDetails() {

    const businessDetails = useSelector(store => store.details);
    const allParams = useParams();
    const businessId = allParams.id;
    const dispatch = useDispatch();
    const history = useHistory();

    const newFavorite = () => {
        console.log('clicked favorite button!');
        const action = {type: 'ADD_FAVORITE', payload: {id: businessId}};
        dispatch(action);
        history.push('/favorites'); 
    }

    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS', payload: {id: businessId}});
    }, [businessId]);

    return(
        <div>
            <h1>Details for {businessDetails.name}</h1> 
            <button onClick={() => newFavorite()}>Favorite</button>
            <h3>businessDetails: </h3>
                <p>{JSON.stringify(businessDetails)}</p>
            <h3>allParams: </h3>
                <p>{JSON.stringify(allParams)}</p>
        </div>
    )
}

export default BusinessDetails;