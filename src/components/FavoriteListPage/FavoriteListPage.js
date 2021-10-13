import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoriteList() {

    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.businessList);

    return(
        <div>
            <h1>Favorite List Page</h1>
        {JSON.stringify(favoriteList)}
        </div>
    )
}

export default FavoriteList;