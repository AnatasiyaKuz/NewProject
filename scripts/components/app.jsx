import React from 'react';
import { Header } from './header';
import { Opisanie } from './opisanie';
import { NewCollection } from './newCollection';

import { Tasting } from './tasting';
import '../../css/styles.css'
import { Contacts } from './footer';

export const App=()=>{
    return (
        <section class="mainApp">
            
            <Header/>             
            <Opisanie/>
            <NewCollection/>
            <Tasting/>
            <Contacts/>
        </section>
        
    )
}