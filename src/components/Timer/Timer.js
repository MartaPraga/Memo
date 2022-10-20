import React, {useEffect} from "react";
import './Timer.scss'

export function Timer({time, setTime}) {

useEffect(() => {
let interval;
 if (time>0) {
     interval = setInterval(() => setTime(time - 1), 1000)
 }
         return ()=> clearInterval(interval)
}, [time]);



    return(
        <div className='box1'>
            Time: {time}
        </div>
    )
}