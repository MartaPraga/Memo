import React from "react";
import './MatchedPairsList.scss'


export function MatchedPairsList({matchedCards}) {

    function readText(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.voice = speechSynthesis.getVoices()[61];
        utterance.lang = 'pl-PL';
        speechSynthesis.speak(utterance)
    }


    return (
        <div className='MatchedPairsList__container'>
            <table>
                {matchedCards?.map(card =>
                    (<tr onClick={() => readText(card.text)}>
                            <td><img src={card.src}/></td>
                            <td>{card.text}</td>
                        </tr>
                    )
                )}
            </table>
        </div>
    )
}
