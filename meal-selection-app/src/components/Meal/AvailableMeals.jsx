import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "../MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://meal-37c1c-default-rtdb.firebaseio.com/meals.json/"
      );
      if (!response.ok) {
        console.log("here");
        throw new Error("Something went wrong!");
      }
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
      setIsLoading(false);
    };

    fetchMeals().catch((e) => {
      setIsLoading(false);
      setHttpError(e.message);
    });
  }, []);
  const mealsList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      id={meal.id}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <h1>Failed to fetch</h1>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};
export default AvailableMeals;
