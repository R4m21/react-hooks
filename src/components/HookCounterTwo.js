import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [Count, setCount] = useState(initialCount)

    const incrementFiveTime = () => {
        for (let i = 0; i < 5; i++) {
            setCount(Count+1)
        }
    }
    const incrementFiveTimes = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevState => prevState+1)
        }
    }

    return (
        <div>
        <p>using currentState</p>
        <p>{Count}</p>
        <button onClick={()=>setCount(Count+1)}>+</button>
        <button onClick={()=>setCount(Count-1)}>-</button>
        <button type="reset" onClick={()=>setCount(initialCount)}>reset</button>
        <button onClick={incrementFiveTime}>+5</button>
        <p>using prevState (its safe)</p>
        <p>{Count}</p>
        <button onClick={()=>setCount(prevState => prevState+1)}>+</button>
        <button onClick={()=>setCount(prevState => prevState-1)}>-</button>
        <button type="reset" onClick={()=>setCount(initialCount)}>reset</button>
        <button onClick={incrementFiveTimes}>+5</button>
        </div>
    )
}

export default HookCounterTwo
