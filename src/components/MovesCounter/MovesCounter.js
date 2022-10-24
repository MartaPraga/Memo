import React from "react";
import './MovesCounter.scss'

export function MovesCounter({moves}) {
    return(
        <div className='MovesCounter'>
            Moves: {moves}
        </div>
    )
}