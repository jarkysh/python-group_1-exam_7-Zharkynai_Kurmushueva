import React, {Component} from 'react';
import './App.css';
import OrderForm from './components/OrderForm/OrderForm';
import MealForm from './components/MealForm/MealForm';



const availableIngredients = [
    {name: 'hamburger', type: 'food', price: 80, label: 'Hamburger', src:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.tellusaboutus.com%2Fcomments%2Fimages%2FBK-WebComment%2FBB_WHOPPER-v1.png&f=1'},
    {name: 'cheeseburger',type: 'food', price: 85, label: 'Cheeseburger', src:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ffastfood4u.ru%2Ffiles%2Ffile%2F-%2F%D0%B4%D0%B2%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9_%D1%87%D0%B8%D0%B7%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80_xxl_%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80_%D0%BA%D0%B8%D0%BD%D0%B3.png&f=1'},
    {name: 'fries',type: 'food', price: 30, label: 'Fries', src:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ffries%2Ffries_PNG57.png&f=1'},
    {name: 'coffee',type: 'drink', price: 20, label: 'Coffee', src:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-fotki.yandex.ru%2Fget%2F3512%2F200418627.86%2F0_1218c3_ec163465_orig.png&f=1'},
    {name: 'tea',type: 'drink', price: 10, label: 'Tea', src:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ftea%2Ftea_PNG16924.png&f=1'},
    {name: 'cola',type: 'drink', price: 28, label: 'Coca Cola', src:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fcocacola%2Fcocacola_PNG28.png&f=1'}
];

class App extends Component {
    state = {
        ingredients: {
            hamburger: { count: 0, total : 0},
            cheeseburger: {count: 0, total: 0},
            fries: {count: 0, total: 0},
            coffee: {count: 0, total: 0},
            tea: {count: 0, total: 0},
            cola: {count: 0, total: 0}
        },
        total: 0
    };

    addIngredient = (name) => {

        let ingredient = {...this.state.ingredients[name]};

        let price = availableIngredients.find(item => item.name === name).price;
        ingredient.count += 1;
        ingredient.total = ingredient.count * price;


        let ingredients = {...this.state.ingredients};

        ingredients[name] = ingredient;

        let state = {...this.state};

        state.ingredients = ingredients;
        this.getCost(state);

        this.setState(state);
    };

    removeIngredient = (name) => {


        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        if (ingredient.count > 0) {
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;
        this.setState(state);
    };

    getCost = () => {
        return this.state.ingredients.hamburger.total+
        this.state.ingredients.cheeseburger.total+
        this.state.ingredients.fries.total+
        this.state.ingredients.coffee.total+
        this.state.ingredients.tea.total+
        this.state.ingredients.cola.total;
    }

    render() {
        return (
            <div className="App">
                <OrderForm ingredients={this.state.ingredients} sub = {this.removeIngredient} getPrice = {this.getCost}/>
                <MealForm add = {this.addIngredient} list = {availableIngredients} />
            </div>
        );
    }
}

export default App;