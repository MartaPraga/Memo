import React, {useState} from "react";
import './TextWindow.scss'


export function TextWindow({matchedCards}) {


    return (
        <div className='textWindow__container'>
            <table>
                <tr>
                    <td><img src={matchedCards?.src}/></td>
                    <td>{matchedCards?.text}</td>
                </tr>
            </table>
        </div>
    )
}
