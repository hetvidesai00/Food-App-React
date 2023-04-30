import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) =>{
    const cart_items = <ul>{
    [{id: 'm1', name: 'Sushi', amount:2, price:10.22}].map(items =>{
        <li>{items.name}</li>
    })}</ul>
    return(
        <Modal onClose={props.onClose}>
            {cart_items}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.55</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.button}>Order</button>
                <button className={classes['button--alt']} onClick = {props.onClose}>Close</button>
            </div>
        </Modal>
    )
}

export default Cart