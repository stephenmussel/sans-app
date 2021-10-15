import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// import FavoriteListItem from "../FavoriteListItem/FavoriteListItem";

function FavoriteList() {

    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favorite);
    const history = useHistory();

    useEffect(() => {
        const action = {type: 'FETCH_FAVORITE'};
        dispatch(action)
    }, []);

    return(
        <div>
            <h1>Favorite List Page</h1>
            {JSON.stringify(favoriteList)}
            {/* {favoriteList.map(favorite =>(
                <FavoriteListItem 
                    key={favorite.id}
                    favorite={favorite}
                />
            ))} */}
        </div>
    )
}

export default FavoriteList;