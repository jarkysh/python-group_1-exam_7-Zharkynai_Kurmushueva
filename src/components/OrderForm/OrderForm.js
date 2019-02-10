import React from 'react';
import Order from './Order/Order';


function OrderForm(props) {

    const {hamburger, cheeseburger, fries, coffee, tea, cola} = props.ingredients;


    let ingredients = [];
    if (hamburger.count>0) ingredients.push(<Order label = "Hamburger" info = {hamburger} sub = {props.sub} name = "hamburger"/>);
    if (cheeseburger.count>0) ingredients.push(<Order label = "Cheeseburger" info = {cheeseburger} sub = {props.sub} name = "cheeseburger"/>);
    if (fries.count>0) ingredients.push(<Order label = "Fries" info = {fries} sub = {props.sub} name = "fries"/>);
    if (coffee.count>0) ingredients.push(<Order label = "Coffee" info = {coffee} sub = {props.sub} name = "coffee"/>);
    if (tea.count>0) ingredients.push(<Order label = "Tea" info = {tea} sub = {props.sub} name = "tea"/>);
    if (cola.count>0) ingredients.push(<Order label = "Cola" info = {cola} sub = {props.sub} name = "cola"/>);
    if (ingredients.length === 0) ingredients.push(
        <p>Order is empty!<br />Please add some items!</p>
    )
    return <div className="OrderForm">
        {ingredients}
        <p>_______________</p>
         <p> Current Price : {props.getPrice()} KGS</p>
    </div>
}


export default OrderForm