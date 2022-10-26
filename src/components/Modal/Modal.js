import React, {useState} from "react";
import './modal.scss';

const goodJobImg = [
    {"src": "/img/goodJobImg/cat_1.jpg"},
    {"src": "/img/goodJobImg/cat_2.jpg"},
    {"src": "/img/goodJobImg/cat_3.jpg"},
    {"src": "/img/goodJobImg/cat_4.jpg"},
]

export function Modal({open, onClose, pairsNumber, onClick}) {
const [randomImageToShow, setRandomImageToShow] = useState(goodJobImg[1].src)

    if (!open) return null

    function RandomImg() {
        setRandomImageToShow(goodJobImg[Math.floor(Math.random() * goodJobImg.length)].src);
    }

    return (
        <div className='Modal'>
            <div className='Modal__content'>
                <span className='Modal__content-close' onClick={onClose}>&times;</span>
                <h2>Congratulations!</h2>
                <p>You have won the game and found all {pairsNumber} pairs of cards.</p>
                <img  onClick={RandomImg}
                      className='Modal__content__image'
                      src={randomImageToShow}
                      alt="cat saying good job"/>
                <button className='Modal__content__button' onClick={() => {onClick(); onClose()}}>New game</button>
            </div>
        </div>
    )
}