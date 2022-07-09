import classes from '../food.module.scss';
import Card from '../../ui/card/Card'

const CartItem = ({item,index,addQuantity,removeQuantity,removeFromCart}) => {

  return (
    <Card>
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
                    <div className={`flex align-center space-between ${classes.btn_wrapper}`}>
                        <div>
                            <div className={`${classes.select_qty}`}>
                                <div className={`${classes.remove_qty}`} onClick={() => removeQuantity(item.id)}><i className="fa fa-minus" aria-hidden="true"></i></div>
                                <div className={`${classes.qty_number}`}>{item.quantity}</div>
                                <div className={`${classes.add_qty}`} onClick={() => addQuantity(item.id)}><i className="fa fa-plus" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div onClick={() => removeFromCart(item)}>
                        <i className="fa fa-trash"  aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
        </div>
    </Card>
  );
};

export default CartItem;
