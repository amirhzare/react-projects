import classes from "./cart.module.css";
import Model from "../UI/Model";

const Cart = () => {
  return (
    <Model>
      {/* catItem */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.68</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>
        <button>Order</button>
      </div>
    </Model>
  );
};
export default Cart;
