import React from 'react';
import '../../../css/styles.css'

export const Contacts =()=>{
    const date = [
        {
            name:'Главная',
            id:1
        },
        {
            name:'Каталог',
            id:2
        },
        {
            name:'Поставщики',
            id:3
        },
        {
            name:'Коллекции',
            id:4
        },
        {
            name:'Дегустация',
            id:5
        },
        {
            name:'Коллекция 2020',
            id:6
        },
        {
            name:'Контакты',
            id:7
        }
       
    ]


    return(
        <section className="contacts">
            <div className="container">
                <div className="contactsNav">
                    <div className="navFotter">
                        <ul>
                             {
                                 date.map((item,index)=>{
                                     return(
                                            <li className="Montserrat fourteen white" key={index}>{item.name}</li>
                                        )
                                     })
                            }
                        </ul>
                    </div>
                        
                    
                    
                </div>
            </div>
        </section>
    )

}