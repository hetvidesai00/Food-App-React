import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest Sushi',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
]

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(items =>
                        <MealItem key={items.id}
                            id = {items.id}
                            title={items.name}
                            summary={items.description}
                            price={items.price} />
                    )}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals