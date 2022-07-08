import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import classes from './Header.module.scss';
import { useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname
  const cartItems =  useSelector((state) => state.cart.cartItems);
  const orderItems =  useSelector((state) => state.order.orderItems);


  return (
    <header className={classes.header}>
      <h1>Restaurant</h1>
        <nav>
            <div className={classes.toggle_wrap}>
                 <ul>
                    <li>
                        <Link to="/" className={`${pathname === '/' ? classes.active : ''}`}>
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className={`${pathname === '/cart' ? classes.active : ''}`}>
                            <i className="fa fa-shopping-cart"></i> 
                            <span>{cartItems.length}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders" className={`${pathname === '/orders' ? classes.active : ''}`}>
                            Orders
                            <span>{orderItems.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
  );
};

export default Header;
