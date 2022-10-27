import React from "react";
import './Scores.scss'

export function Scores() {
    return (
        <table className='Score__table'>
            <thead>
                <th>No.</th>
                <th>Name</th>
                <th>Time</th>
                <th>Moves</th>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Marta</td>
                <td>2:35</td>
                <td>12</td>
            </tr>
            </tbody>
        </table>
    )
}