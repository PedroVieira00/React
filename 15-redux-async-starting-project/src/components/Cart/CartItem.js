import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const increaseItemQuantity = () => {
    dispatch(
      cartActions.addProductToCart({
        id,
        title,
        quantity,
        price,
        totalPrice: total,
      })
    );
  };

  const decreaseItemQuantity = () => {
    dispatch(cartActions.removeProductToCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemQuantity}>-</button>
          <button onClick={increaseItemQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
