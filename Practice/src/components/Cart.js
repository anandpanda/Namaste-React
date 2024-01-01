import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart text-center ">
      <h1 className="font-bold text-3xl p-4 m-4">Cart</h1>
      <button className="bg-red-500 rounded-lg p-2 mb-4" 
        onClick = {handleClearCart}>Empty Cart</button>
      {cartItems.length > 0 ? (
        <div className="items w-8/12 mx-auto my-4 bg-[#fafff5] shadow-xl p-4">
          <ItemList items={cartItems} />
        </div>
      ) : (
        <h2>Your cart is Empty!</h2>
      )}
    </div>
  );
}
export default Cart;