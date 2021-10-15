import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const NewBusinessForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();


    let defaultBusiness = {
        name: '',
        rating: '',
        description: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        // website: '',
        // favorite: '',
        // notes: '',
    }
   
    // this is comes after defaultBusiness is defined!
    const [newBusiness, setBusiness] = useState(defaultBusiness);


    const addBusiness = (event) => {
        // console.log('clicked add button!');        
        event.preventDefault();
        const action = {type: 'POST_BUSINESS', payload: newBusiness};        
        dispatch(action);
        setBusiness(defaultBusiness);
        
    }

    return(
        <div>
            <h1>Add New Business</h1>
            <form onSubmit={addBusiness}>
                <input type="text" placeholder="name" value={newBusiness.name} onChange={(event) => setBusiness({...newBusiness, name: event.target.value})}/>&nbsp;
                <input type="text" placeholder="rating" value={newBusiness.rating} onChange={(event) => setBusiness({...newBusiness, rating: event.target.value})}/>&nbsp;
                <input type="text" placeholder="description" value={newBusiness.description} onChange={(event) => setBusiness({...newBusiness, description: event.target.value})}/>&nbsp;
                <input type="text" placeholder="address" value={newBusiness.address} onChange={(event) => setBusiness({...newBusiness, address: event.target.value})}/>&nbsp;
                <input type="text" placeholder="city" value={newBusiness.city} onChange={(event) => setBusiness({...newBusiness, city: event.target.value})}/>&nbsp;
                <input type="text" placeholder="state" value={newBusiness.state} onChange={(event) => setBusiness({...newBusiness, state: event.target.value})}/>&nbsp;
                <input type="text" placeholder="zip" value={newBusiness.zip} onChange={(event) => setBusiness({...newBusiness, zip: event.target.value})}/>&nbsp;
                {/* <input type="text" placeholder="phone" value={newBusiness.phone} onChange={(event) => setBusiness({...newBusiness, phone: event.target.value})}/>&nbsp; */}
                {/* <input type="text" placeholder="website" value={newBusiness.website} onChange={(event) => setBusiness({...newBusiness, website: event.target.value})}/>&nbsp; */}
                {/* <input type="text" placeholder="favorite" value={newBusiness.favorite} onChange={(event) => setBusiness({...newBusiness, favorite: event.target.value})}/>&nbsp; */}
                {/* <input type="text" placeholder="notes" value={newBusiness.notes} onChange={(event) => setBusiness({...newBusiness, notes: event.target.value})}/>&nbsp; */}

                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default NewBusinessForm;