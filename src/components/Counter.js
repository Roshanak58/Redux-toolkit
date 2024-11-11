import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { increment ,decrement,incrementByAmount, selectCounter } from '../features/counter/counterSlice';

function Counter() {
    const [value,setValue]=useState(2);
    const counter=useSelector(selectCounter);
    const dispatch=useDispatch();
  return (
    <div>
        <h2>counter is:{counter}</h2>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <input  type="number"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={()=>dispatch(incrementByAmount(+value))}>incrementByAmount</button>
    </div>
  )
}

export default Counter



