import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    street: "",
    city: "",
    postalCode: "",
  });
  const [formInputdValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    formIsValid ? console.log("yes") : console.log("no");
    if (formIsValid) {
      props.onConfirm({
        name: formInputs.name,
        street: formInputs.street,
        city: formInputs.city,
        postalCode: formInputs.postalCode,
      });
    }
  };
  const formCheck = () => {
    let enteredName = nameInputRef.current.value;
    let enteredStreet = streetInputRef.current.value;
    let enteredPostal = postalInputRef.current.value;
    let enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });
    setFormIsValid(
      enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredPostalIsValid &&
        enteredCityIsValid
    );

    setFormInputs({
      name: enteredName,
      street: enteredStreet,
      city: enteredPostal,
      postalCode: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={formCheck ? confirmHandler : ""}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputdValidity.name && <p>Please enter valid name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputdValidity.street && <p>Please enter valid street!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputdValidity.postalCode && (
          <p>Please enter valid postal Code!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputdValidity.city && <p>Please enter valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit} onClick={formCheck}>
          Confirm
        </button>
      </div>
    </form>
  );
};
export default Checkout;
