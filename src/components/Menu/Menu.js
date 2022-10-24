import React from "react";
import './menu.scss'

export function Menu() {
    return(
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <a className='nav__list-item-link' href="/scores">Scores</a>
                </li>
                <li className='nav__list-item'>
                    <a className='nav__list-item-link' href="/game">Game</a>
                </li>
            </ul>
        </nav>
    )
}