import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export default function Cart(props ) {
  const {cartItems, add, remove, buy, } = props;
  const totalPrice = cartItems.reduce((sum,product)=> sum + product.price * product.number, 0);
  return (
    <div>
    
       <Alert variant="secondary">
       <Spinner animation="border" variant="danger" />
    <Alert.Heading>Cart</Alert.Heading>
    {cartItems.length === 0 && <p>nothing</p>}
    <table>
    <tr><td width={"25%"}>📄name</td>
    <td width={"25%"}>📖count</td>
    <td width={"25%"}>💰price</td>
    <td width={"25%"}>📕all</td>
    </tr>
    {cartItems.map(product =>(
       <tr><td width={"25%"}>{product.name}</td>
       <td width={"25%"}>
        <Button onClick={()=>add(product)}variant="primary">+</Button>{''}
        <Button onClick={()=>remove(product)} variant="danger">-</Button>{' '}
        {product.number}</td>
       
       </tr>
      ))}

    </table>
    <hr />
    <p className="mb-0">
      сума до сплати{totalPrice}
    </p>
    <Button onClick={buy} variant="success" disabled={cartItems.length === 0}>оформити замовлення</Button>{''}
  </Alert>

  </div>
  );
}
