import React, {useState} from 'react'

function Counter() {
    const [name, setName] = useState()

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}></button>
    </div>)
}

export default Counter