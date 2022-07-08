
import { useState } from 'react';
import classes from '../food.module.scss';
import Card from '../../ui/card/Card'
import { Link } from "react-router-dom";

const CartItem = ({item}) => {

  return (
    <Card>
        <div className={'flex'}>
            <div className={classes.icon}><i className="fa fa-cutlery" aria-hidden="true"></i> </div>
            <div className={classes.content}>
                <div className={classes.item_name}>{item?.name} <span>({item?.type}, {item?.cuisine})</span></div>
                <div className={classes.availability}>
                    <div className={classes.title}>Availabilty</div>
                    <ul>
                        {item.availability?.map((item,index) =>  <li key={index}>{item}</li> )}
                    </ul>
                </div>
                <div className={classes.price}>Rs.{item.price} (<small>Qty:<span>{item.quantity}</span></small>)</div>
                {/* <div className={classes.price}></div> */}
                </div>
        </div>
    </Card>
  );
};

export default CartItem;
