import React from 'react'
import useFormInput from './Hook/useFormInput'

function FormInputTwo() {
    const [firstName,bindFirstName,resetFirstName] = useFormInput('')
    const [lastName,bindLastName,resetLastName] = useFormInput('')
    const submitHandler = e => {
        e.preventDefault()
        resetFirstName()
        resetLastName()
        alert(`Hello ${firstName} ${lastName}`)
    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>&nbsp;&nbsp;
                <input type="text" {...bindFirstName}></input>
            </div>
            <div>
                <label>Last Name</label>&nbsp;&nbsp;
                <input type="text" {...bindLastName}></input>
            </div>
            <button>Submit</button>
            {/* <input type="submit"/> */}
        </form>
        </div>
    )
}

export default FormInputTwo