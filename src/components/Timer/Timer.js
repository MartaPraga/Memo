import React, {useEffect, useState} from "react";
import './Timer.scss'

export function Timer({ timeRunning, seconds, setSeconds, minutes, setMinutes, matchedCards }) {
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    useEffect(() => {
        let time;

        if (timeRunning && matchedCards.length < 8) {
            time = setInterval(() => {
                setSeconds(prevTime => prevTime + 1)
            }, 1000)
        }

        if (seconds === 60) {
            setSeconds(0)
            setMinutes(prevState => prevState + 1)
        }
        return (
            function stopTime() {
            clearInterval(time)
        })

    }, [seconds, minutes, timeRunning])

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }

    return (
        <div className='Timer'>
            Time: {minutes}:{seconds}
         </div>
    )


}