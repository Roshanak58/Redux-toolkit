
import { useDispatch,useSelector } from "react-redux"

import { increment,decrement } from "../features/number/NumberSlice"

function Number() {
    const number=useSelector((state)=>state.number.numberValue);
    
    const dispatch=useDispatch();
  return (
    <div>
        <h2>Number is: {number}</h2>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Number