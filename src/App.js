import { useState } from 'react';
import './App.scss';
import Card from './Components/card';
import PriceBar from './Components/priceBar';
import AssetItemButtons from './Components/assetItemButtons';
import AssetInputs from './Components/assetInputs';
import a1 from './images/a1.jpg'
import a2 from './images/a2.jpg'
import c1 from './images/c1.jpg'
import c2 from './images/c2.jpg'
import t1 from './images/t1.jpg'
import t2 from './images/t2.jpg'
import t3 from './images/t3.jpg'
import e1 from './images/e1.jpg'
import e2 from './images/e2.jpg'
import e3 from './images/e3.jpg'

function App() {

  const konsolla = () => {
    console.log("asdsa");
  }


  const idCreator = () => { Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) }

  const array = [
    { name: "Adidas", price: "250", type: "shoe", id: idCreator(), img: a1 },
    { name: "Vans", price: "425", type: "shoe", id: idCreator(), img: a2 },
    { name: "Mark Ryden", price: "182", type: "backpack", id: idCreator(), img: c1 },
    { name: "Pierre Cardin", price: "367", type: "backpack", id: idCreator(), img: c2 },
    { name: "Mavi", price: "1250", type: "t-shirt", id: idCreator(), img: t1 },
    { name: "LCWaikiki", price: "286", type: "t-shirt", id: idCreator(), img: t2 },
    { name: "LCWaikiki", price: "762", type: "t-shirt", id: idCreator(), img: t3 },
    { name: "Mavi", price: "884", type: "dress", id: idCreator(), img: e1 },
    { name: "Koton", price: "1615", type: "dress", id: idCreator(), img: e2 },
    { name: "Zara", price: "1754", type: "dress", id: idCreator(), img: e3 },
  ]

  const [items, setItems] = useState(array);
  const [shoppingList, setShoppingList] = useState([])
  const [searchText, setSearchText] = useState("")
  const [priceValue, setPriceValue] = useState("")
  const [showList, setShowList] = useState(false)

  const searching = (value1, value2) => {
    if (value1, value2) {
      setItems([]);
      setItems(array.filter(item => item.name.toLowerCase().startsWith(value1)))
      setItems(prev => prev.filter(item => Number(value2) >= Number(item.price)))
    } else if (value1, !value2) {
      setItems([]);
      array.forEach(item => item.name.toLowerCase().startsWith(value1) ? setItems(prev => [...prev, item]) : setItems(prev => [...prev]))
    } else if (!value1, value2) {
      setItems([]);
      setItems(array.filter(item => Number(value2) >= Number(item.price)))
    } else {
      setItems(array);
    }
  }

  const getShoes = () => {
    setPriceValue("")
    setSearchText("")
    setItems([]);
    array.forEach(item => item.type === "shoe" && setItems(prev => [...prev, item]))
  }
  const getBackpacks = () => {
    setPriceValue("")
    setSearchText("")
    setItems([]);
    array.forEach(item => item.type === "backpack" && setItems(prev => [...prev, item]))
  }
  const getThirts = () => {
    setPriceValue("")
    setSearchText("")
    setItems([]);
    array.forEach(item => item.type === "t-shirt" && setItems(prev => [...prev, item]))
  }
  const getDresses = () => {
    setPriceValue("")
    setSearchText("")
    setItems([]);
    array.forEach(item => item.type === "dress" && setItems(prev => [...prev, item]))
  }
  const getTotalPrice = () => {
    let totalPrice = 0
    shoppingList.forEach(item => {
      totalPrice += Number(item.price)
    })
    return totalPrice;
  }

  const addShoppingList = (item) => {
    setShoppingList(prev => [...prev, item])
  }

  return (
    <div className="App">

      <div className='asset'>
        <button className='list-item btn-primary' onClick={e => {
          setItems(array)
          setSearchText("")
          setPriceValue("")
        }}>All Products</button>
        <AssetInputs setSearchText={setSearchText} searchText={searchText} searching={searching} setPriceValue={setPriceValue} priceValue={priceValue} />
        <AssetItemButtons getShoes={getShoes} getBackpacks={getBackpacks} getThirts={getThirts} getDresses={getDresses} />
      </div>

      <div className='card-container'>
        {items.map((item, index) => <Card key={index} item={item} addShoppingList={addShoppingList} />)}
      </div>

      <i onClick={() => showList ? setShowList(false) : setShowList(true)} title='Buy List' className="fa-sharp fa-solid fa-cart-shopping fa-2xl "> </i>
      <div className='pointing'>{shoppingList.length ? shoppingList.length : null}</div>

      {showList ? <PriceBar shoppingList={shoppingList} setShoppingList={setShoppingList} getTotalPrice={getTotalPrice} /> : null}

    </div >
  );
}

export default App;