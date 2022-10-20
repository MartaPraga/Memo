import React from "react";
import {PageHeader} from "../PageHeader/PageHeader";
import {PageFooter} from "../PageFooter/PageFooter";

import {Game} from "../Game/game";
import './Layout.scss'


export function Layout() {
    return (
        <div className='layout'>
            <PageHeader/>
            <main className='layout__main'>
                <Game/>
            </main>
            <PageFooter/>
        </div>
    )
}