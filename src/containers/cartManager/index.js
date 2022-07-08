import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/ui/card/Card'
import { Link } from "react-router-dom";
import classes from './CartManager.module.scss'
import { foodActions } from '../../store/food';
import { cartActions } from '../../store/cart';
import { orderActions } from '../../store/order';
import { useNavigate } from "react-router-dom";
import CartItem from '../../components/food/cartItem'
import { useEffect } from 'react';

const CartManager = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems =  useSelector((state) => state.cart.cartItems);
    const totalPrice =  useSelector((state) => state.cart.totalPrice); 

  useEffect(()=> {
    dispatch(cartActions.getTotalPrice());
  },[])

//   useEffect( () => {
//     return () => dispatch(cartActions.clear());
//   }, [] );
  
    const orderHandler = (cartItems,totalPrice) => {
        dispatch(orderActions.add({cartItems,totalPrice}));
        navigate("/orders");
        dispatch(cartActions.clear())
    } 

    const addQuantityHandler = (id) => {
        dispatch(cartActions.addQuantity(id));
        dispatch(cartActions.getTotalPrice());
    };
    const removeQuantityHandler = (id) => {
        dispatch(cartActions.removeQuantity(id));
        dispatch(cartActions.getTotalPrice());
    };

    const removeFromCartHandler = (cartItem) => {
        dispatch(cartActions.decrement(cartItem));
        dispatch(cartActions.getTotalPrice());
    }

  return (
    <>
        <div className="container">
            {cartItems.length > 0 ? 
                <>
                    <div className={'grid'}>
                        {
                            cartItems.map( (cartItem,index) => {
                            return(
                                    <CartItem item = {cartItem} 
                                        key={index} 
                                        index={index} 
                                        removeQuantity={removeQuantityHandler} 
                                        addQuantity={addQuantityHandler} 
                                        removeFromCart = {removeFromCartHandler}
                                        // addToCart = {addToCartHander}
                                        // removeFromCart = {removeFromCartHandler}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={classes.price_info}>
                        <div className={classes.label}>Total Amount: <span>Rs.{ totalPrice && totalPrice }</span></div>
                        <div className='flex justify-center'>
                            <button onClick={() => orderHandler(cartItems,totalPrice)}>Confirm Order</button>
                        </div>
                    </div>
                </>
                :
                <Card><div className='text-center'>No items in the cart. <Link to="/">Please slelect the items!</Link></div> </Card>
            }
        </div>
    </>
  );
};

export default CartManager;
