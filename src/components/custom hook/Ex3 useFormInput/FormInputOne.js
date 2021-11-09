import React, { useState } from 'react'

function FormInputOne() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>&nbsp;&nbsp;
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name</label>&nbsp;&nbsp;
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>
            </div>
            <button>Submit</button>
            {/* <input type="submit"/> */}
        </form>
        </div>
    )
}

export default FormInputOne
