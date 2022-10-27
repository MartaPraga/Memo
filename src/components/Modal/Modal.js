import React, { useState} from "react";
import './modal.scss';

const goodJobImg = [
    {"src": "/img/goodJobImg/cat_1.jpg"},
    {"src": "/img/goodJobImg/cat_2.jpg"},
    {"src": "/img/goodJobImg/cat_3.jpg"},
    {"src": "/img/goodJobImg/cat_4.jpg"},
]

export function Modal({open, onClose, pairsNumber, onClick, minutes, seconds, moves}) {
    const [randomImageToShow, setRandomImageToShow] = useState(goodJobImg[1].src);
    const [username, setUserName] = useState('')
    const [disabledSaveButton, setDisabledSaveButton] = useState(true);
    const [score, setScore] = useState({});

    // const highScore = () => {
    //     setScore(JSON.parse(localStorage.getItem("score")));
    // }
        // () => {
        // const localDate = localStorage.getItem('score');
        // localDate ? JSON.parse(localDate) : [];
    // }


//     useEffect(() => {
// localStorage.setItem(name)
//     }, [name, moves])

    if (!open) return null

    function RandomImg() {
        setRandomImageToShow(goodJobImg[Math.floor(Math.random() * goodJobImg.length)].src);
    }

    const handleChange = event => {
        setDisabledSaveButton(false);
        setUserName(event.target.value)
    }


    const saveScore = event => {
        event.preventDefault();
        setScore({
            name: username,
            moves: moves,
            minutes: minutes,
            seconds: seconds
        });
        console.log(score)
        localStorage.setItem('score', JSON.stringify(score));
        window.location.assign('/scores')
    }


    return (
        <div className='Modal'>
            <div className='Modal__content'>
                <span className='Modal__content-close' onClick={onClose}>&times;</span>
                <h2>Congratulations!</h2>
                <p>You have won the game and found all {pairsNumber} pairs of cards.</p>
                <p>You did it in {minutes}:{seconds} and {moves} moves!!!</p>
                <label htmlFor="username">Write your name, and save your score!</label>
                <form className="Modal__content-input">
                    <input type="text"
                           name='username'
                           id='username'
                           placeholder='Name'
                           onChange={handleChange}
                           value={username}
                    />
                    <button
                        className='Modal__content-input__save-button'
                        type='submit'
                        onClick={saveScore}
                        disabled={disabledSaveButton}
                    >
                        SAVE
                    </button>
                </form>

                <img onClick={RandomImg}
                     className='Modal__content__image'
                     src={randomImageToShow}
                     alt="cat saying good job"/>

                <button className='Modal__content__button' onClick={() => {
                    onClick();
                    onClose()
                }}>New game
                </button>
            </div>
        </div>
    )
}