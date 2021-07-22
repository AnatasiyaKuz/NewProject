import React from 'react';
import { ReactDOM } from 'react';
import { Header } from './header';
import { Opisanie } from './opisanie';
import { NewCollection } from './newCollection';
import '../../css/styles.css'
import { Tasting } from './tasting';
import { Contacts } from './footer';

export const App=()=>{
    return (
        <section >
            
            <Header/>             
            <Opisanie/>
            <NewCollection/>
            <Tasting/>
            <Contacts/>
        </section>
        
    )
}