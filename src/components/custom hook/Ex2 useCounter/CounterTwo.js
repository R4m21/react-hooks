import React, { useState } from 'react'

function CounterTwo() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(prevState => prevState+1)
    const decrement = () => setCount(prevState => prevState-1)
    const reset = () => setCount(0)
    return (
        <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwo
