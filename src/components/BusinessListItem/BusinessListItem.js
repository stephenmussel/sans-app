import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function BusinessListItem({ business }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const viewBusinessDetails = () => {
        // console.log('clicked on image');
        dispatch({type: 'FETCH_DETAILS', payload: business})
        history.push(`/details/${business.id}`);
      }

    return(
        <div onClick={viewBusinessDetails} key={business.id}>
            <img src={business.image_url} />
            <h3>{business.name}</h3>
          </div>
    )
}

export default BusinessListItem;