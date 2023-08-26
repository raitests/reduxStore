import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.quantity);
  const dispatch = useDispatch();
  const cartButtonClickHandler = () => {
    dispatch(cartActions.onShowCart());
  };
  return (
    <button className={classes.button} onClick={cartButtonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
