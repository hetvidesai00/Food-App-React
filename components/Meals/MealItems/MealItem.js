import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props)=>{
    //const amount = `$${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.summary}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    )
}

export default MealItem