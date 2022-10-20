import React, {useEffect, useState} from "react";
import shuffle from "lodash.shuffle";
import {CardTemplate} from "../CardTemplate/CardTemplate";
import {Timer} from "../Timer/Timer";
import {MovesCounter} from "../MovesCounter/MovesCounter";
import {TextWindow} from "../TextWindow/TextWindow";
import './game.scss';

const carsLogo = [
    {"src": "/img/CarsLogo/acura-logo.png", text: "acura"},
    {"src": "/img/CarsLogo/alfaRomeo-logo.png", text: "Alfa Romeo"},
    {"src": "/img/CarsLogo/audi-logo.png", text: 'Audi'},
    {"src": "/img/CarsLogo/bentley-logo.png", text: 'Bentley'},
    {"src": "/img/CarsLogo/bmw-logo.png", text: 'BMW'},
    {"src": "/img/CarsLogo/citroen-logo.png", text: 'Citroen'},
    {"src": "/img/CarsLogo/dodge-logo.png", text: 'Dodge'},
    {"src": "/img/CarsLogo/ferrari-logo.png", text: 'Ferrari'},
    {"src": "/img/CarsLogo/fiat-logo.png", text: 'Fiat'},
    {"src": "/img/CarsLogo/ford-logo.png", text: 'Ford'},
    {"src": "/img/CarsLogo/honda-logo.png", text: 'Honda'},
    {"src": "/img/CarsLogo/hyundai-logo.png", text: 'Hyundai'},
    {"src": "/img/CarsLogo/lamborghini-logo.png", text: 'Lamborghini'},
    {"src": "/img/CarsLogo/landRover-logo.png", text: 'Land Rover'},
    {"src": "/img/CarsLogo/mercedes-logo.png", text: 'Mercedes'},
    {"src": "/img/CarsLogo/mini-logo.png", text: 'Mini'},
    {"src": "/img/CarsLogo/nissan-logo.png", text: 'Nissan'},
    {"src": "/img/CarsLogo/opel-logo.png", text: 'Opel'},
    {"src": "/img/CarsLogo/porsche-logo.png", text: 'Porsche'},
    {"src": "/img/CarsLogo/renault-logo.png", text: 'Renault'},
    {"src": "/img/CarsLogo/rover-logo.png", text: 'Rover'},
    {"src": "/img/CarsLogo/skoda-logo.png", text: 'Skoda'},
    {"src": "/img/CarsLogo/subaru-logo.png", text: 'Subaru'},
    {"src": "/img/CarsLogo/suzuki-logo.png", text: 'Suzuki'},
    {"src": "/img/CarsLogo/tesla-logo.png", text: 'Tesla'},
    {"src": "/img/CarsLogo/toyota-logo.png", text: 'Toyota'},
    {"src": "/img/CarsLogo/volkswagen-logo.png", text: 'Volkswagen'},
    // {"src": "/img/CarsLogo/volvo-logo.png", text: 'volvo'},
];

const INITIAL_TIME = 60;

export function Game() {
    const [cards, setCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(INITIAL_TIME);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);

    const shuffleCards = () => {
        const shuffledArray = shuffle(carsLogo)
            .slice(0, 8);
        const duplicatedArray = [...shuffledArray, ...shuffledArray]
        const shuffledCards = shuffle(duplicatedArray)
            .map((card, index) => ({...card, id: index, matched: false}))

        setCards(shuffledCards)
        setMoves(0)
        setTime(INITIAL_TIME)
    }

    const resetMoves = () => {
        setFirstCard(null);
        setSecondCard(null);
        setMoves(prevState => prevState + 1);
    }

    const handleCard = (card) => {
        if (secondCard) {
            return;
        }
        if (firstCard) {
            setSecondCard(card)
        } else {
            setFirstCard(card)
        }

    }

    useEffect(() => {
        if (firstCard && secondCard) {
            if (firstCard.src === secondCard.src) {
                setCards(prevState => {
                    return prevState.map(card => {
                        if (firstCard.src === card.src) {
                            setMatchedCards(card)
                            console.log('@@@@@@@', matchedCards)
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetMoves()

            } else {
                setTimeout(() => resetMoves(), 1000)
            }
        }

    }, [firstCard, secondCard]);


    return (
        <div className='Game'>
            <div className='Game__cardTemplate'>
                {cards.map(card => (
                    <CardTemplate
                        key={card.id}
                        card={card}
                        handleCard={handleCard}
                        flipped={card === firstCard || card === secondCard || card.matched}
                    />
                ))}
            </div>
            <div className='Game__main__extensions'>
                <button onClick={shuffleCards} className='Game__main__extensions__button'>New Game</button>
                <Timer
                    time={time}
                    setTime={setTime}
                />
                <MovesCounter
                    moves={moves}
                />
                <TextWindow
                    matchedCards={matchedCards}
                />
            </div>
        </div>
    )
}