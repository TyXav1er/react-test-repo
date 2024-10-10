// an  "Updater function" is a function passed as an argument to setState() usually. it allows for safe updates based on the previous state. Its used with multiple state updates and asynchronous functions.
// Ex. setYear(y => y + 1)

import React, {useState} from 'react'

function MyComponent() {

    const [count, setCount] = useState(0)

    function increment() {
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT staste becomes the CURRENT state after an update.

        setCount(c => c + 1) // c represents the previous count. Not the current count
        setCount(c => c + 1) 
        setCount(c => c + 1) 

    }

    function decrement() {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent