import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

export const Cart = () => {
  // { items: [] }
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `${totalPrice.toFixed(2)} ZŁ`;

  return (
    // <CartContext.Consumer>
    <div id="cart">
      {cartCtx.items.length === 0 && <p>Brak przedmiotów w koszyku!</p>}
      {cartCtx.items.length > 0 && (
        <ul id="cart-items">
          {cartCtx.items.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.price} ZŁ</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() => cartCtx.updateItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => cartCtx.updateItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};
