import React from 'react';

const AssetInputs = ({ setSearchText, searchText, searching, setPriceValue, priceValue }) => {
    return (<>
        <input className='search-bar' value={searchText} placeholder='Search' type="text" onChange={(e) => {
            setSearchText(e.target.value)
            searching(e.target.value, priceValue)
        }} />
        <input className='price' value={priceValue} placeholder='Max $' type="number" onChange={(e) => {
            setPriceValue(e.target.value)
            searching(searchText, e.target.value)
        }} />
    </>)
}

export default AssetInputs;

