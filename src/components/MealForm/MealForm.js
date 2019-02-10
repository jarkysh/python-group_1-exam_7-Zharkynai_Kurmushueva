import React from 'react';
import Meal from './Meal/Meal';


function MealForm(props) {

    const [hamburger, cheeseburger, fries, coffee, tea, cola] = props.list;


    let items = [];
    items.push(<Meal info = {hamburger} func = {props.add}/>);
    items.push(<Meal info = {cheeseburger} func = {props.add}/>);
    items.push(<Meal info = {fries} func = {props.add}/>);
    items.push(<Meal info = {coffee} func = {props.add}/>);
    items.push(<Meal info = {tea} func = {props.add}/>);
    items.push(<Meal info = {cola} func = {props.add}/>);

    return <div className="MealForm">
        {items}
    </div>
}


export default MealForm