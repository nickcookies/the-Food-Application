import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleClickShown = () => {
    setCartIsShown(true)
  }

  const handleClickHide= () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
    {cartIsShown && <Cart onCloseCart={handleClickHide}/>}
      <Header onShowCart={handleClickShown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
