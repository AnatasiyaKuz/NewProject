import React from 'react';

import '../../../css/styles.css'
import { Gallery } from '../gallery';

export const NewCollection=()=>{
    return(
        <section className="newCollection">
            <div className="container">
                <div className="newCollectionInfo">
                    <div className="aboutNewCollection">
                        <p className="Montserrat black sixt pad">Новинки коллекций</p>
                        <p className="PlayfairDisplay black thirty-six">Март 1980 </p>
                        <p className="PlayfairDisplay black thirty-six">Урожай Марселя</p>
                        <div className="line black"></div>
                        <p className="Montserrat black fourteen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.</p>
                        <table>
                            <tr><th>1980</th><th><p className="PlayfairDisplay black eighteen">Colli Euganei Bianco Ca' Lustra 1980 </p><p className="Montserrat black fourteen">Красочная бутылка вина из Марселя</p></th></tr>
                            <tr><th>1980</th><th><p className="PlayfairDisplay black eighteen">Colli Euganei Bianco Ca' Lustra 1980 </p><p className="Montserrat black fourteen">Красочная бутылка вина из Марселя</p></th></tr>
                            <tr><th>1980</th><th><p className="PlayfairDisplay black eighteen">Colli Euganei Bianco Ca' Lustra 1980 </p><p className="Montserrat black fourteen">Красочная бутылка вина из Марселя</p></th></tr>
                        </table>
                        <p className="Montserrat black fourteen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.</p>
                        <button className="button left">узнать подробнее</button>
                    </div>
                    <div className="photoNewCollection">
                        <Gallery/>
                    </div>
                </div>
            </div>
        </section>
    )
}