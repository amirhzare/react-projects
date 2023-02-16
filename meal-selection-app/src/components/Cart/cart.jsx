import { useContext, useState } from "react";
import classes from "./cart.module.css";
import Model from "../UI/Model";
import CartContex from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckOut, setIsCheckedOut] = useState(false);
  const cartCtx = useContext(CartContex);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckedOut(true);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const submitHandler = (userData) => {};
  const modalAction = () => {
    return (
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Cancel
        </button>
        {hasItems && <button onClick={orderHandler}>Order</button>}
      </div>
    );
  };
  return (
    <Model>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckOut && <Checkout onClose={props.onHideCart} />}
      {!isCheckOut && modalAction()}
    </Model>
  );
};
export default Cart;
