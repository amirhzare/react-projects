import classes from "./Meals.module.css";
import MealCard from "./MealCard";
import MealsSummary from "./MealSumary";
import AvailableMeals from "./AvailableMeals";
import Card from "../UI/Card";
import { Fragment } from "react";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
export default Meals;
