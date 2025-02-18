import { useState } from "react";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";

function App() {
  const [shoppingCart, setShoppingCart] = useState({ itmes: [] });

  return (
    <div>
      <Header
        // { items: [] }
        cart={shoppingCart}
        color={"blue"}
      />
      <Shop onAddItemToCart={() => setShoppingCart} />
    </div>
  );
}

export default App;
