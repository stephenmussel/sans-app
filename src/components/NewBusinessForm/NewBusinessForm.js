const NewBusinessForm = () => {

    const addBusiness = () => {
        console.log('clicked add button!');
        
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