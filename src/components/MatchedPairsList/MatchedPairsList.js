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
                {matchedCards?.map(card => (
                    <tbody>
                        <tr key={card.id} onClick={() => readText(card.text)}>
                            <td><img src={card.src} alt="Brand logo"/></td>
                            <td>{card.text}</td>
                        </tr>
                    </tbody>
                    )
                )}
            </table>
        </div>
    )
}
