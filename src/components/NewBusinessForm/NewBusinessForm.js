import { useState } from "react";

const NewBusinessForm = () => {

    const [newBusiness, setBusiness] = useState(defaultBusiness);

    let defaultBusiness = {
        name: '',
    }

    function addBusiness(event) {
        console.log('clicked add button!');
        event.preventDefault();
        
    }

    return(
        <div>
            <h1>Add New Business Form</h1>
            <form onSubmit={addBusiness}>
                <input type='text' placeholder='name'/>
                <input type='submit' value='Add'/>
            </form>
        </div>
    )
}

export default NewBusinessForm;