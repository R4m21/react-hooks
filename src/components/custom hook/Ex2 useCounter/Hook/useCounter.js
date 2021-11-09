import { useState } from 'react'

function useCounter(inctialValue = 0,step) {
    const [count, setCount] = useState(inctialValue)
    const increment = () => setCount(prevState => prevState+step)
    const decrement = () => setCount(prevState => prevState-step)
    const reset = () => setCount(0)
    return [count,increment,decrement,reset]
}

export default useCounter
