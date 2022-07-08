import { useSelector, useDispatch } from 'react-redux';
import { foodActions } from '../../store/food';
import { cartActions } from '../../store/cart';
import Card from '../../components/ui/card/Card'
import FoodItem from '../../components/food/foodItem'
import classes from './FoodManager.module.scss'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const FoodManager = () => {
  const dispatch = useDispatch();
  const foodItems = useSelector((state) => state.food.foodItems);
  const cartItems =  useSelector((state) => state.cart.cartItems);

  const addQuantityHandler = (id) => {
    dispatch(cartActions.addQuantity(id));
  };
  const removeQuantityHandler = (id) => {
    dispatch(cartActions.removeQuantity(id));
  };

  const addToCartHander = (cartItem) => {
    dispatch(cartActions.increment(cartItem));
  }
  
  const removeFromCartHandler = (cartItem) => {
    dispatch(cartActions.decrement(cartItem));
  }

  

  return (
    <main>
        <div className="container">
            <div className={'grid'}>
                {foodItems && foodItems.map( (foodItem,index) => {
                    return(
                        <FoodItem item = {foodItem} 
                            key={index} index={index} 
                            removeQuantity={removeQuantityHandler} 
                            addQuantity={addQuantityHandler} 
                            addToCart = {addToCartHander}
                            removeFromCart = {removeFromCartHandler}
                            cartItems = {cartItems}
                        />
                    )
                })}
            </div>
            {cartItems?.length >=1 && 
                <div className='text-center'>
                  <Link to="/cart"><button className={classes.order_btn}>Place Order</button></Link>
                </div>
            }
        </div>
    </main>
  );
};

export default FoodManager;
