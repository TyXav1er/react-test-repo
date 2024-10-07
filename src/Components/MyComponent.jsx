import React, {useState} from 'react'

function MyComponent() {
    const [name, setName] = useState("Guest") // name is the variable, setName is the state of the variable, Guest is the default variable of name
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)
    
    const updateName = () => {
        setName("Tyler")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>

        </div>
    )
}

export default MyComponent