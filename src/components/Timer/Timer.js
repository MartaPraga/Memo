import React, {useEffect} from "react";
import './Timer.scss'

export function Timer({ timeRunning, seconds, setSeconds, minutes, setMinutes, matchedCards, pairsNumber }) {
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    useEffect(() => {
        let time;

        if (timeRunning && matchedCards.length < pairsNumber) {
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

    }, [seconds, setSeconds, minutes, setMinutes, matchedCards, timeRunning, pairsNumber])

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