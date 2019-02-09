import React, {Component} from 'react';
import './App.css';
import FastFood from './components/FastFood/FastFood';
import OrderDetailsForm from './components/OrderDetailsForm/OrderDetailsForm';
import FastFoodForm from './components/FastFoodForm/FastFoodForm';



const availableFfoods= [
    {name: 'hamburger', type: 'food', price: 80,label:'Humburger'},
    {name: 'cheeseburger',type: 'food', price: 90,label: 'Cheeseburger'},
    {name: 'fries',type: 'food', price: 45, label: 'Fries'},
    {name: 'coffee',type: 'drink', price: 50, label: 'Coffee'},
    {name: 'tea',type: 'drink', price: 30, label: 'Tea'},
    {name: 'cola',type: 'drink', price: 45, label: 'Cola'}
];

class App extends Component {
    state = {
        ffoods: {
            hamburger: { count: 1, total : 0},
            cheeseburger: {count: 2, total: 0},
            fries: {count: 0, total: 0},
            coffee: {count: 0, total: 0},
            tea: {count: 0, total: 0},
            cola: {count: 0, total: 0}
        },
        total: 0
    };

    addFfood = (name) => {

        let ffood = {...this.state.ffoods[name]};


        let price = availableFfoods.find(item => item.name === name).price;
        ffood.count += 1;
        ffood.total = ffood.count * price;


        let ffoods = {...this.state.ffoods};


        ffoods[name] = ffood;


        let state = {...this.state};


        state.ffoods = ffoods;
        this.getCost(state);

        this.setState(state);
    };

    removeFfood = (name) => {


        let ffood = {...this.state.ffoods[name]};
        let price = availableFfoods.find(item => item.name === name).price;
        if (ffood.count > 0) {
            ffood.count -= 1;
        }
        ffood.total = ffood.count * price;

        let ffoods = {...this.state.ffoods};
        ffoods[name] = ffood;

        let state = {...this.state};
        state.ffoods = ffoods;
        this.setState(state);
    };

    getCost = () => {
        return this.state.ffoods.hamburger.total+
        this.state.ffoods.cheeseburger.total+
        this.state.ffoods.fries.total+
        this.state.ffoods.coffee.total+
        this.state.ffoods.tea.total+
        this.state.ffoods.cola.total;
    }

    render() {
        return (
            <div className="App">
                <OrderForm ingredients={this.state.ffoods} sub = {this.removeFfood()} info = {availableFfoods}/>
                <p> Current Price : {this.getCost()} KGS</p>
            </div>
        );
    }
}


export default App;
