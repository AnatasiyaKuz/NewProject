import React from 'react';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import '../../../css/styles.css'


export const Header=()=>{
    const mainMenu = [
        {
            id:1,
            name:'Каталог'
        },
        {
            id:2,
            name:'Доставка',
            
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
    const [form,setForm]=useState(false);
    const [temping, setTemping]=useState('')

    const [menu,setMenu]=useState(false);
    
    const getForm = (name)=>{
        if(name==='Доставка'){
            setForm(true);
            
        }
    }
    const getMenu = ()=>{
        setMenu(true);
    }

    return(
        <header className="header" style={{backgroundImage:'url(../images/bgc.png)'}}>
           
           <div className={form ? "formDostavka openForm" : "formDostavka"}>
                   
                   <fieldset>
                   <CloseIcon onClick={()=>setForm(false)} />
                       <legend>{temping}</legend>
                       <form>
                           <input className="Montserrat thirteen white" style={{textAlign:'left'}} type="text" id="name" name="Name" placeholder="Имя"/>
                           <input className="Montserrat thirteen white" style={{textAlign:'left'}} type="tel" id="phone" name="Phone" placeholder="Телефон"/>
                           <input className="Montserrat thirteen white" type="text" id="adress" name="Adress" placeholder="Адрес доставки"></input>
                       </form>
                       <button  className="Montserrat white" >Заказать</button>
                       
                   </fieldset>
                   

               </div>   
                                  
            <div className="container">
                <div className="information">
                    <div className="Montserrat white thirteen">Новокузнечный переулок 4/1</div>
                    <div className="Montserrat white thirteen">8 (812) 123-45-67</div>  
                </div>
                <div className="menuIcon" onClick={()=>getMenu()} ><MenuIcon/></div>
                <div className="main-menu">
                    {
                        mainMenu.map((item,index)=>{
                            return(
                                <div style={{textAlign:'center'}} onClick={()=>getForm(item.name)} className="Montserrat white fourteen borders" key={index}>{item.name} </div>
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