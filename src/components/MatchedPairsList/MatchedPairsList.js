import React from "react";
import './MatchedPairsList.scss'


export function MatchedPairsList({matchedCards}) {
    return (
        <div className='MatchedPairsList__container'>
            <table>
                {matchedCards?.map(card =>
                    (<tr>
                            <td><img src={card.src}/></td>
                            <td>{card.text}</td>
                        </tr>
                    )
                )}
            </table>
        </div>
    )
}
