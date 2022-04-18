import React from "react";
import cart from "../img/cart.png";
import user from "../img/user.png";

export const Header=({onClickCart})=>{
    return(
    <header className="d-flex justify-between align-center p-40  ">
        <div className=" d-flex align-center ">
            <img className="mr-10" width={40} height={40} src="/img/Shoes/logo.jpg" alt="Логотип картинка"/>
            <div className="headerInfo">
                <h3 className="text-uppercase">Sport Shoes</h3>
                <p className="opacity-5">Магазин спортивной обуви</p>
            </div>
        </div>
        <ul className="headerRight d-flex align-center ">
            <li onClick={onClickCart} className="mr-30 cu-p">
                <img className='cart mr-10' width={50} height={50} src={cart} alt="корзина"/>
                <span>1300грн</span>
            </li>
            <li>
                <img className="user" width={20} height={20} src={user} alt="пользователи"/>
            </li>
        </ul>
    </header>

)
}
