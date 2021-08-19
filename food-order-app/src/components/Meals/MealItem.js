import './MealItem.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const MealItem = (props) => {
    
  const cartCtx = useContext(CartContext);
   
  const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount=>{
      cartCtx.addItem({ 
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }
    return (
    <li>
      <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
      </div>
      
    </li>
  );
};

export default MealItem;
