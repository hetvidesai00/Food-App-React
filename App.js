import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart"; 
import Meals from "./components/Meals/Meals";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart = ()=>{
    setCartIsShown(true)
  } 

  const hideCart = ()=>{
    setCartIsShown(false)
  } 
  return (
    <div>
      {cartIsShown && <Cart onClose = {hideCart}/>}
      <Header onCartClick = {showCart}/>
      <Meals/>
    </div>
  );
}

export default App;
