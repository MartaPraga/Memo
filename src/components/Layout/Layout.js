import React from "react";
// import {Switch, Route} from 'react-router-dom';
import {PageHeader} from "../PageHeader/PageHeader";
// import {Game} from "../Game/game";
// import {Scores} from "../Scores/Scores";
import {PageFooter} from "../PageFooter/PageFooter";
import './Layout.scss'
import {Outlet} from "react-router-dom";
// import * as path from "path";


export function Layout() {
    return (
        <div className='layout'>
            <PageHeader/>
            <main className='layout__main'>
                <Outlet />
            </main>
            <PageFooter/>
        </div>
    )
}