// useEffect() is a React hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// THis component mounts. When you mount a component, thats when you create and append the component to the DOM
// The state of a value

//useEffect(function, [dependencies])

// 1. useEffect(() => {})           // Runs after every re-rendder
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  //Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from 'react'

function MyComponent() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    // Benefits of useEffect() - useEffect keeps your code more organized. You can control exactly when the code runs

    useEffect(() => {
        document.title = `Count: ${count} ${color}` // the function can be a callback, an anonymous function or arrow function

        return () => {
            
        }
    }, [count, color])

    function addCount() {
        setCount(c => c + 1)
    }

    function subtractCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
    <div>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button> <br />
    <button onClick={changeColor}>Change Color</button>
    </div>)
}

export default MyComponent