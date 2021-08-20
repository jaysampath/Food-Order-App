import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
const Checkout = (props) => {

    const [formInputsValid, setFormInputsValid] = useState({
       name: true,
       street:true,
       city:true,
       postalCode: true
    });


  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = value => value.trim()==='';
  const isFiveChars = value => value.length ===5;


  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;  
   
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValid({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalCodeIsValid
    });

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;
      
    if(!formIsValid){
        return;
    }

    //submit form data
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode
    });
};

const nameControlClasses = `${classes.control} ${formInputsValid.name?'':classes.invalid}`;
const streetControlClasses = `${classes.control} ${formInputsValid.street?'':classes.invalid}`;
const postalCodeControlClasses = `${classes.control} ${formInputsValid.postalCode?'':classes.invalid}`;
const cityControlClasses = `${classes.control} ${formInputsValid.city?'':classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValid.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValid.postalCode && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValid.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
