import React from "react";
import './index.scss'

import axios from "axios";

import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Cart} from "./components/Cart";


const App = () => {
    const [items,setItems]=React.useState([])
    const [cartItems,setCartItems]=React.useState([])
    const [searchValue,setSearchValue]=React.useState("")

const [cartOpened,setCartOpened]=React.useState(false)

    React.useEffect(()=> {
        axios.get('https://618453a7ac0b850017489de3.mockapi.io/items').then(res=> {
            setItems(res.data)
        });
        axios.get('https://618453a7ac0b850017489de3.mockapi.io/cart').then(res=> {
            setCartItems(res.data)
        });
    } ,[]);


    const onAddToCart=(object)=>{
        setCartItems((prev)=>[...prev,object])
        axios.post('https://618453a7ac0b850017489de3.mockapi.io/cart',object)




    }
    const onRemoveItem=(id)=>{
        axios.delete(`https://618453a7ac0b850017489de3.mockapi.io/cart/${id}` )
        setCartItems((prev)=>prev.filter((item)=>item.id!==id))

    }

const onChangeSearchInput=(event)=>{
       setSearchValue(event.target.value)
}


    return (
        <div className="wrapper clear">

            {cartOpened ? <Cart items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/> : null}

            <Header onClickCart={()=>setCartOpened(true)}/>
            <div className="demo d-flex justify-between">
                <div className="demoLeft">
                    <img className='leftPicture mt-15 ml-20' src="/img/demo/image 7.png" alt="demoLeftPictures"/>
                    <h1 className="demoLeftText "><span className="stan">Stan Smith</span>,
                        Forever!</h1>
                </div>
                <div className="demoRight">
                    <img src="/img/demo/image 6.png" alt="Большая картинка"/>
                </div>
            </div>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все Кросовки"}</h1>
                    <div className="searchBlock d-flex">
                        <img src="/img/search/search.svg" alt="Search"/>
                        <input type="text" onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="allCards d-flex flex-wrap ">
                    {items
                        .filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index)=>
                        <Card
                            key ={index}
                            title={item.title}
                              image={item.image}
                              price={item.price}
                              onFavorite={()=>console.log('222')}
                              onPlus={(object)=>onAddToCart(object)}

                       />
                    )}


                </div>

            </div>

        </div>
    )
}

export default App;
