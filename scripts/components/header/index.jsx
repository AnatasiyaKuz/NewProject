import React from 'react';

import '../../../css/styles.css'

export const Header=()=>{
    const mainMenu = [
        {
            id:1,
            name:'Каталог'
        },
        {
            id:2,
            name:'Доставка'
        },
        {
            id:3,
            name:'Коллекции'
        },
        {
            id:4,
            name:'Контакты'
        }
    ]
    return(
        <header className="header">
            <div className="container">
                <div className="information">
                    <div className="Montserrat white thirteen">Новокузнечный переулок 4/1</div>
                    <div className="Montserrat white thirteen">8 (812) 123-45-67</div>  
                </div>
                <div className="main-menu">
                    {
                        mainMenu.map((item,index)=>{
                            return(
                                <div className="Montserrat white fourteen borders" key={index}>{item.name} </div>
                            )
                        })
                    }

                </div>
                <div className="mainButtons">
                    <button className="button center">ВИННАЯ КАРТА</button>
                    <button className="button center">ДЕГУСТАЦИЯ</button>
                </div>
            </div>
        </header>

    )
}