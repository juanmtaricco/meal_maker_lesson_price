const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },

    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },

    get mains() {
      return this._mains;
    },

    set mains(mainsIn) {
      this._mains = mainsIn;
    },

    get desserts() {
      return this._desserts;
    },

    set desserts(dessertsIn) {
      this._desserts = 'dessertsIn';
    },

  },  
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }

  },
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },
  
 getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomNumber = Math.floor(Math.random() * dishes.length);
    return dishes[randomNumber];
  },
  
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const appetizersNumber = this._courses['appetizers'].indexOf(appetizers);
    const appetizersPrice = this._courses['appetizers'][appetizersNumber].price;
    const mains = this.getRandomDishFromCourse('mains');
    const mainsNumber = this._courses['mains'].indexOf(mains);
    const mainsPrice = this._courses['mains'][mainsNumber].price;
    const desserts = this.getRandomDishFromCourse('desserts');
    const dessertsNumber = this._courses['desserts'].indexOf(desserts);
    const dessertsPrice = this._courses['desserts'][dessertsNumber].price;
    const totalPrice = appetizersPrice + mainsPrice + dessertsPrice;
    console.log(appetizers);
    console.log(mains);
    console.log(desserts);
    console.log('\nTotal price of the meal: $' + totalPrice + '\n');
  }
};


menu.addDishToCourse('appetizers', 'pasta', 3.45);
menu.addDishToCourse('appetizers', 'cold cuts', 6.90);
menu.addDishToCourse('appetizers', 'patatas bravas', 2.00);

menu.addDishToCourse('mains', 'veal', 11.45);
menu.addDishToCourse('mains', 'fish', 9.90);
menu.addDishToCourse('mains', 'chicken', 7.00);

menu.addDishToCourse('desserts', 'ice cream', 6.45);
menu.addDishToCourse('desserts', 'pudding', 4.90);
menu.addDishToCourse('desserts', 'cookies', 1.60);


meal = () => menu.generateRandomMeal();

meal();
