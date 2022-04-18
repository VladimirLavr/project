import React from "react";
import styles from "./Card.module.scss"
import axios from "axios";


export const Card=({title,image,price,onFavorite,onPlus, })=>{

const[isAdded,setIsAdded]= React.useState(false);



 const onClickPlus=()=>{
     setIsAdded(!isAdded)
 onPlus({title,image,price});


}
const[isFavorite,setAddedFavorite]=React.useState(false)

const whenOnFavoriteClick=()=>{
    onFavorite()
    setAddedFavorite(!isFavorite)
    }



    return(

<div className={styles.card}>
    <div className={styles.favorite}>
        <img width={30} height={30} onClick={whenOnFavoriteClick}   src={isFavorite ? "/img/heart.svg ": "/img/heartread.svg"} alt="heartUrl"/>
    </div>
    <img width={113}
         height={112} src={image} alt="shoes1"/>
    <p>{title}</p>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/plusChecked.png"  : "/img/plus.svg"} alt="plus"/>
    </div>
</div>
    )
}