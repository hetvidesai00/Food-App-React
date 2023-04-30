import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onCartClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg
" alt="A table full of meal"></img>
            </div>
        </>
    )
}

export default Header