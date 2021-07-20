import React from "react";
import { useState } from "react";
import img1 from "../../../images/gallery1.png"
import img2 from "../../../images/gallery2.png"
import img3 from "../../../images/gallery3.png"
import CloseIcon from '@material-ui/icons/Close';

export const Gallery=()=>{
    let images = [
        {
            id:1,
            image:img1
        },
        {
            id:2,
            image:img2
        },
        {
            id:3,
            image:img3
        },

    ]

    const [model,setModel]=useState(false);
    const [temping,setTemping]=useState('');

    const getImg=(image)=>{
        setModel(true);
        setTemping(image);
    }
    

    return(
        <section>
            <div className={model ? "model open" : "model"}>
                <img src={temping}></img>
                <CloseIcon onClick={()=>setModel(false)} />
            </div>

            <div className="gallery">
            {
                images.map((item,index)=>{
                    return(
                        <div className="pic" key={index} onClick={()=>getImg(item.image)}>
                            <img src={item.image} style={{width:'100%'}}/>
                        </div>

                    )

                })
            }

            </div>
        </section>

    )

}