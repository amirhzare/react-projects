import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "../MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://meal-37c1c-default-rtdb.firebaseio.com/meals.json/"
      );
      const responseData = await response.json();

      const loadedMeals = [];
      console.log(loadedMeals);
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      id={meal.id}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};
export default AvailableMeals;
