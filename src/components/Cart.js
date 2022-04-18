import React from "react";

export const Cart = ({onClose,onRemove, items = []}) => {
    return (
        <div className="cartPage">
            <div className="cartPageIsOn d-flex flex-column">
                <h2 className="mb-30 d-flex justify-between">Корзина <img className='removeBtn ' onClick={onClose}
                                                                          src="/img/btnremove.svg" alt="btnRemove"/>
                </h2>
                <div className="items">
                    {
                        items.map((shoe) => (

                            <div className="cartItem d-flex align-center mb-30">

                                <img className='removeBtn' src="/img/btnremove.svg" alt="btnRemove"/>
                            </div>,
                                <div className="cartItem d-flex align-center">
                                    <img className="mr-20" width={70} height={70} src={shoe.image} alt="shoe"/>
                                    <div className="mr-20">
                                        <p className="mb-5">{shoe.title}</p>
                                        <b>{shoe.price}</b>

                                    </div>
                                    <img className='removeBtn' onClick={()=>onRemove(shoe.id)} src="/img/btnremove.svg" alt="btnRemove"/>
                                </div>
                        ))
                    }

                </div>

                <div className="cartTotalBlock d-flex  flex-column">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>6200 грн</b>
                        </li>


                        <li>
                            <span>С ПДВ:</span>
                            <div></div>
                            <b>1050 грн</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img className=" " width={14} height={12}
                                                                        src="/img/cartCursor.svg" alt="cartCursor"/>
                    </button>
                </div>
            </div>
        </div>

    )
}

