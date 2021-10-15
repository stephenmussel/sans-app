import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const NewBusinessForm = () => {

    const [newBusiness, setBusiness] = useState(defaultBusiness);
    const dispatch = useDispatch();
    const history = useHistory();

    let defaultBusiness = {
        name: '',
    }

    function addBusiness(event) {
        console.log('clicked add button!');
        event.preventDefault();
        const action = {type: 'POST_BUSINESS', payload: newBusiness};
        dispatch(action);
        setBusiness(defaultBusiness)
        // history.push('/businessList')
        
    }

    return(
        <div>
            <h1>Add New Business</h1>
            <form onSubmit={addBusiness}>
                <input type='text' placeholder='name' value={newBusiness}/>
                <input type='submit' value='Add'/>
            </form>
        </div>
    )
}

export default NewBusinessForm;