import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = () => {
  const title = useSelector((state) => state.title);
  const price = useSelector((state) => state.price);
  const quantity = useSelector((state) => state.quantity);

  const UpdatedTotal = price * quantity;
  // const { title, quantity, total, price } = , state.quantity, state.total, state.price;
  // });
  const dispatch = useDispatch();

  const decreaseQuantityHandler = () => {
    if (quantity > 0) dispatch(cartActions.decreaseQuantity());
  };
  const increaseQuantityHandler = () => {
    if (quantity < 15) dispatch(cartActions.increaseQuantity());
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${UpdatedTotal.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
