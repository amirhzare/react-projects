import classes from "./MealCard.module.css";

function MealCard() {
  return (
    <li className={classes.meal}>
      <div className={classes.detail}>
        <h2 className={classes.name}>Sushi</h2>
        <h3 className={classes["meal-detail"]}>Finest fish and veggies</h3>
        <h4 className={classes.price}>$22.99</h4>
      </div>
      <div className="action"></div>
      <div className={classes.line}></div>
    </li>
  );
}

export default MealCard;
