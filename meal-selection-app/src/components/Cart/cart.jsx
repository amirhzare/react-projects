import React, { useContext, useState } from "react";
import classes from "./cart.module.css";
import Model from "../UI/Model";
import CartContex from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckOut, setIsCheckedOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
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
  const submitHandler = async (userData) => {
    setIsSubmitting(true);
    setIsSubmited(false);
    await fetch("https://meal-37c1c-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setIsSubmited(true);
    cartCtx.clearCart();
  };
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

  const inputsField = (
    <React.Fragment>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>

      <Checkout onClose={props.onHideCart} onConfirm={submitHandler} />
    </React.Fragment>
  );

  const isSubmittedContent = (
    <React.Fragment>
      <p>The request is submitted!</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          OK
        </button>
        {hasItems && <button onClick={orderHandler}>Order</button>}
      </div>
    </React.Fragment>
  );

  return (
    <Model>
      {cartItems}
      {!isSubmited && isCheckOut && inputsField}
      {isSubmited && isSubmittedContent}
      {!isCheckOut && modalAction()}
    </Model>
  );
};
export default Cart;
