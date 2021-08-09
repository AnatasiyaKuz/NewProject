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
        <footer className="contacts" id="4">
            <div className="container">
                <div className="contactsNav">
                    <div className="navFootter">
                        <ul>
                            
                             {
                                 date.map((item,index)=>{
                                     return(
                                            <a href={item.id}>
                                                <li className="Montserrat fourteen white" key={index}>{item.name}</li>
                                            </a>
                                            
                                        )
                                     })
                            }
                        </ul>
                    </div>
                    <div className="contactInfo">
                        <div className="elem_contactInfo">
                            <p className="Montserrat fourteen white" style={{textTransform:'uppercase'}}>винный бутик le corte</p>
                        </div>
                        <div className="elem_contactInfo">
                        <p className="Montserrat fourteen white" style={{textTransform:'uppercase'}}>8 (812) 123-45-67</p>
                        </div>
                        <div className="elem_contactInfo">
                            <img src="../../../images/youtube.png" />
                            <img src="../../../images/vk.png" />
                            <img src="../../../images/fb.png" />
                        </div>
                        <div className="elem_contactInfo">
                        <p className="Montserrat fourteen white" style={{textTransform:'uppercase'}}>@le-corte.ru</p>
                        </div>
                    </div>
                        
                    
                    
                </div>
            </div>
        </footer>
    )

}