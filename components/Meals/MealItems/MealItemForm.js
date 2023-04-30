import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props) =>{
    return(
        <form className={classes.form}>
            <Input label='Amount' input={{
                id : 'amount' + props.id,
                type: 'text',
                min : '1',
                max: '5',
                space: '1',
                default: '1',
            }}
            />
            <button className={classes.button}> +Add </button>
        </form>
    )
}

export default MealItemForm