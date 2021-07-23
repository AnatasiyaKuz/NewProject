import React from 'react';
import '../../../css/styles.css'

export const Tasting = () => {
    return(
        <div className="tasting">
            <div className="container">
                <fieldset>
                    <legend className="PlayfairDisplay thirty-six white">Запись на дегустацию</legend>
                    <div className="inputContainer">
                        <div className="line white"></div>
                        <p style={{textAlign:'center'}} className="Montserrat white sixt ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.</p>
                        <form>
                            <input className="Montserrat thirteen white" style={{textAlign:'left'}} type="text" id="name" name="Name" placeholder="Имя"/>
                            <input className="Montserrat thirteen white" style={{textAlign:'left'}} type="tel" id="phone" name="Phone" placeholder="Телефон"/>
                            <input className="Montserrat thirteen white" type="text" id="adress" name="Adress" placeholder="Бутик на Невском 103"></input>
                        </form>
                        <button className="button center">Записаться</button>
                        
                    </div>
                    
                </fieldset>

            </div>
        </div>
    )
}