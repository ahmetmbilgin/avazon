import React from 'react';

const PriceBar = ({ shoppingList, setShoppingList, getTotalPrice }) => {
    return (
        <div className='price-bar'>
            <h2>~ Shopping List ~</h2>
            <div>-------------------------------------------</div>
            {shoppingList.length ? <>{shoppingList.map((item, index) => (
                <div key={index} title='Delete' onClick={() => {
                    shoppingList.splice(index, 1)
                    setShoppingList(prev => [...prev])
                }} className='shop-list-item'>
                    <div className='shop-list-item-name'>{item.name}</div>
                    <div className='shop-list-item-price'>{item.price}$</div>
                </div>))}
                <div>-------------------------------------------</div>
                <div className='total-container'>
                    <div className='total-price'>Total Amount = </div>
                    <div className='total-price'>{getTotalPrice()} $</div>
                </div>
            </> : null}
        </div>
    )
}

export default PriceBar;