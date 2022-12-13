import React from 'react';

const Card = ({ item, addShoppingList }) => {

    return (
        <div className='card'>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price} $</p>
            <button  title='Add to Cart' onClick={() => addShoppingList(item)}>Add to Cart</button>
        </div>
    )
}

export default Card;