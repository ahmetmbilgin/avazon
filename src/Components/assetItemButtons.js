import React from 'react';

const AssetItemButtons = ({ getShoes, getBackpacks, getThirts, getDresses }) => {

    return (<>
        <div onClick={getShoes} className='list-item'>Shoes</div>
        <div onClick={getBackpacks} className='list-item'>Backpacks</div>
        <div onClick={getThirts} className='list-item'>T-shirts</div>
        <div onClick={getDresses} className='list-item'>Dresses</div>
    </>)
}
export default AssetItemButtons;