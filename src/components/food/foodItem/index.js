
import { useState } from 'react';
import classes from '../food.module.scss';
import Card from '../../ui/card/Card'

const FoodItem = ({item,cartItems,addToCart,removeFromCart,addQuantity,removeQuantity}) => {

    const [foodSelectedState,setFoodSelectedState] = useState(false);

    const cartHandler = (item) => {
        if(foodSelectedState){
            removeFromCart(item) 
        }
        else{
            addToCart(item)
        }
        setFoodSelectedState(prevState => !prevState);
    }
  
  return (
    <Card>
        {foodSelectedState &&
        
        <div className={classes.alert_green}>
            <i className="fa fa-check-circle" aria-hidden="true"> Added to cart Successfully</i>
        </div>
        }
      <div className={'flex'}>
        <div className={classes.icon}><i className="fa fa-cutlery" aria-hidden="true"></i> </div>
        <div className={classes.content}>
            <div className={classes.item_name}>{item?.name} <span>({item?.type}, {item.cuisine})</span></div>
            <div className={classes.availability}>
                <div className={classes.title}>Availabilty</div>
                <ul>
                    {item.availability?.map((item,index) =>  <li key={index}>{item}</li> )}
                </ul>
            </div>
            <div className={classes.price}>Rs.{item.price}</div>
            {foodSelectedState &&
                <div className={`${classes.select_qty}`}>
                    <div className={`${classes.remove_qty}`} onClick={() => removeQuantity(cartItems.find(cart => cart.id === item.id).id)}><i className="fa fa-minus" aria-hidden="true"></i></div>
                    <div className={`${classes.qty_number}`}>{cartItems.find(cart => cart.id === item.id).quantity}</div>
                    <div className={`${classes.add_qty}`} onClick={() => addQuantity(cartItems.find(cart => cart.id === item.id).id)}><i className="fa fa-plus" aria-hidden="true"></i></div>
                </div>
            }
            <button onClick={() =>  cartHandler(item)}> {foodSelectedState ? "Remove from Cart" : "Add to Cart"} </button>
        </div>
      </div>
    </Card>
  );
};

export default FoodItem;
