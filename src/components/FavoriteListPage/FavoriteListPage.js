import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function FavoriteList() {

    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.businessList);
    const history = useHistory();

    useEffect(() => {
        const action = {type: 'FETCH_FAVORITE'};
        dispatch(action)
    }, []);

    return(
        <div>
            <h1>Favorite List Page</h1>
        {JSON.stringify(favoriteList)}
        </div>
    )
}

export default FavoriteList;