import React, {useState} from 'react'
import Main from './Main';
import Cart from './Cart';
import data from '../data';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Menu() {
  const [cartItems, setCartItems] = useState([]);
  
  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };

  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    setCartItems([]);
  alert("прийнято, напишіть нам в дс gufo20, ваші координаті та країну на імперіум ми до вас приплевемо або прилетемо");
  };
  return (
    <div className="App">
      
      <Row>
      <Col md={8}>
    <Main products={data} add={add}/>
    </Col>
    <Col>
    <Cart cartItems = {cartItems} remove ={remove} add={add} buy={buy}  />
    </Col>
    </Row>
    </div>
    
  )
}