import React, { Component } from 'react';
import './App.css';
import Categories from './Categories';
import Individuals from './Individuals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCategoryDisplayed : true,
      isIndividualsDisplayed : false,
      currentCategory : ''
    };
    this.state.animals = [
      {
        id: 1,
        category: 'Lion',
        age: 8,
        name: 'Simba'
      }, {
        id: 2,
        category: 'Lion',
        age: 30,
        name: 'Mufasa'
      }, {
        id: 3,
        category: 'Lion',
        age: 28,
        name: 'Scar'
      }, {
        id: 4,
        category: 'Snake',
        age: 10,
        name: 'Bosseka'
      }, {
        id: 5,
        category: 'Bear',
        age: 25,
        name: 'Baloo'
      }, {
        id: 6,
        category: 'Bird',
        age: 15,
        name: 'Yago'
      }
    ];
    this.state.categories = [
      {
        id: 1,
        type: 'Lion',
        diet: 'Carnivorous',
        feature: 'gregarious',
        cry: 'Roar',
        qty: 3
      }, {
        id: 2,
        type: 'Snake',
        diet: 'Piscivorous',
        feature: 'venom',
        cry: 'Psssss',
        qty: 1
      }, {
        id: 3,
        type: 'Bear',
        diet: 'Omnivorous',
        feature: 'hibernation',
        cry: 'Waouh',
        qty: 1
      }, {
        id: 4,
        type: 'Bird',
        diet: 'Granivorous',
        feature: 'fly',
        cry: 'Stibat',
        qty: 1
      }
    ];
    this.handleViewClick = this.handleViewClick.bind(this);
    this.handleRowDel = this.handleRowDel.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleProductTable = this.handleProductTable.bind(this);
  }

  handleViewClick(event) {
    this.setState({
      isCategoryDisplayed: !this.state.isCategoryDisplayed,
      isIndividualsDisplayed : !this.state.isIndividualsDisplayed,
      currentCategory: event.target.getAttribute('category')
    });
  }

  handleRowDel(animal) {
    var index = this.state.animals.indexOf(animal);
    this.state.animals.splice(index, 1);
    this.setState(this.state.animals);
    
    // Decrement animals number for the right category
    const cat = this.state.currentCategory;
    var newCategories = this.state.categories;
    newCategories.forEach(function(category) {
      if (category.type === cat) {
        category.qty--;
      }
    });
    this.setState({
      categories: newCategories
    });
  };

  handleAddEvent(evt) {
    const cat = this.state.currentCategory;
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var animal = {
      id: id,
      name: "",
      age: "",
      category: cat
    }
    this.state.animals.push(animal);
    this.setState(this.state.animals);

    // Increment animals number for the right category
    var newCategories = this.state.categories;
    newCategories.forEach(function(category) {
      if (category.type === cat) {
        category.qty++;
      }
    });
    this.setState({
      categories: newCategories
    });
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var animals = this.state.animals.slice();
    var newAnimals = animals.map(function(animal) {
      for (var key in animal) {
        let animalId = String(animal.id);
        if (key === item.name && animalId === item.id) {
          animal[key] = item.value;
        }
      }
      return animal;
    });
    this.setState({
      animals:newAnimals
    });
  };

  render() {
    return (
      <div>
        { this.state.isCategoryDisplayed ? <Categories categories={this.state.categories} onClick={this.handleViewClick} /> : null }
        { this.state.isIndividualsDisplayed ? <Individuals animals={this.state.animals} category={this.state.currentCategory} onClick={this.handleViewClick} onProductTableUpdate={this.handleProductTable} onRowAdd={this.handleAddEvent} onRowDel={this.handleRowDel} /> : null }
      </div>
    );
  }
}

export default App;
