import React from 'react';
import '../../../css/styles.css'
import imgGlass from '../../../images/glass.png'

export const Opisanie =()=>{
    return(
        <section className="opisanie">
            <div className="container">
                <div className="containInfo">
                    <h2 className="PlayfairDisplay white thirty-six">Лучший вкус, это вкус долголетнего вина</h2>
                    <div className="line white"></div>
                    <p className="Montserrat white sixt indent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.</p>
                    <p className="imgGlass"><img src={imgGlass}></img></p>
                </div>
            </div>
        </section>
    );
}