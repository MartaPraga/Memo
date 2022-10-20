import React from "react";
import './CardTemplate.scss'

export function CardTemplate({card, handleCard, flipped}) {

    const handleClick = () => {
        handleCard(card)
    }

    return (
        <div className='Game__cardTemplate-card'>
            <div className={flipped ? "Game__cardTemplate-card-flipped" : ''}>
                <img className='Game__cardTemplate-card-observe'
                     src={card.src}
                     alt='cart front'
                />
                <img className='Game__cardTemplate-card-reverse'
                     src='/img/cardBack.jpg'
                     alt='cart back'
                     onClick={handleClick}/>
            </div>
        </div>
    )
}