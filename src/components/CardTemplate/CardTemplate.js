import React from "react";
import './CardTemplate.scss'

export function CardTemplate({card, handleCard, flipped}) {

    const handleClick = () => {
        handleCard(card)
    }

    function readText(text) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 0.9;
        utterance.voice = speechSynthesis.getVoices()[61];
        utterance.lang = 'pl-PL';
        utterance.volume = 5;
        speechSynthesis.speak(utterance);
        console.log('####', utterance)
    }

    return (
        <div className='Game__cardTemplate-card'>
            <div className={flipped ? "Game__cardTemplate-card-flipped" : ''}
                onClick={ () => readText(card.text)} >
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