import React, { useState } from 'react'

function Check() {
    const [inputField, setInputField] = useState({
        username: '',
        password: ''
    })

    const inputsHandler = (e) => {
        setInputField({ [e.target.name]: e.target.value })
    }

    const submitButton = () => {
        alert(inputField.username)
    }

    return (
        <div>
            <input
                type="text"
                name="username"
                onChange={inputsHandler}
                placeholder="User Name"
                value={inputField.username} />

            <br />

            <input
                type="password"
                name="password"
                onChange={inputsHandler}
                placeholder="Password"
                value={inputField.password} />

            <br />
            <button onClick={submitButton}>Submit Now</button>
        </div>
    )
}

export default Check


