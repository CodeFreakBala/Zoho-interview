import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/ui/card/Card'
import { Link } from "react-router-dom";
import classes from './OrderManager.module.scss'
import { orderActions } from '../../store/order';
import { cartActions } from '../../store/cart';

import OrderItem from '../../components/food/orderItem'
import { useEffect, useState } from 'react';

const OrderManager = () => {
    const dispatch = useDispatch();
    const orderItems =  useSelector((state) => state.order.orderItems);
    const totalPrice =  useSelector((state) => state.cart.totalPrice); 

    const [localOrderState,setLocalOrderState] = useState([]);
    const [searchState,setSearchState] = useState(true)
    const [validation,setValidation] = useState(null);

    useEffect(()=>{
        setLocalOrderState(orderItems)
    },[])


    useEffect(()=>{
        console.log(localOrderState.length)
    },[localOrderState])
    

    

   
    const searchOrderHandler = (orderNum) => {
        if(!orderNum){
            setLocalOrderState(orderItems)
        }
        else{
            setSearchState(false);
            if(orderItems.length>0){
                setLocalOrderState(orderItems.filter(order => { 
                    return order.order_id === Number(orderNum)
                }))
            }
        }
    }

    
  
    return (
      <>
          <div className={`container ${classes.order_manager}`}>
                <div>
                    <div className={classes.input_wrapper}>
                        <label htmlFor="#search_bar" style={{color:'#fff'}}>Search:</label>
                        <input id="search_bar" onChange={(e)=> searchOrderHandler(e.target.value)} type="number" required placeholder='Enter Order Number' />
                    </div>
                </div>
                {
                    localOrderState && localOrderState.length > 0 ? 
                        <>
                            <div className={''}>
                                                    
                                    {
                                        localOrderState.map( (orderItem,index) => {
                                            return(
                                                <Card key={index}>
                                                    <div className={classes.mb_1}><b>Order No:</b> {orderItem?.order_id}</div>
                                                    <div className={classes.mb_1}><b>Order Date:</b> {orderItem.order_date}</div>
                                                    <div className={classes.mb_1}><b>Order Time:</b> {orderItem.order_time}</div>
                                                    <div className={classes.mb_1}><b>Order Amount:</b> Rs.{orderItem.order_price} <small className={classes.green}>(Paid)</small></div>
                                                    <div className="grid">
                                                        {  orderItem.items.map((item,index)=> {    
                                                                return(
                                                                    <OrderItem item = {item} 
                                                                        key={index} 
                                                                        index={index} 
                                                                    />
                                                                )
                                                        })}
                                                    </div>
                                                </Card>
                                            )
                                    })
                                    }
                            </div>
                            <div className={classes.price_info}>
                                <div className={classes.label}>Total Amount: <span>Rs.{ totalPrice && totalPrice }</span></div>
                                <div className='flex justify-center'>
                                    <Link to="/"><button className={classes.mb_1}>Order More!</button></Link>
                                </div>
                            </div>
                        </>
                        :
                        <Card><div className='text-center'>No orders found! <Link to="/">Click here to order</Link></div> </Card>
                        }
          </div>
      </>
    );
  };


export default OrderManager;
