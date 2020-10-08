const inquirer = require('inquirer');
const Potion = require('../lib/Potion');
const Character = require('./Character');

//jest.mock('../lib/Potion');

//console.log(new Potion());

//another way

class Player {
    constructor(name = '') {
      this.name = name;
  
      this.health = Math.floor(Math.random() * 10 + 95);
      this.strength = Math.floor(Math.random() * 5 + 7);
      this.agility = Math.floor(Math.random() * 5 + 7);
  
      this.inventory = [new Potion('health'), new Potion()];
    }
  
    getStats() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }
  
    getInventory() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    }
  
    addPotion(potion) {
      this.inventory.push(potion);
    }
  
    usePotion(index) {
      const potion = this.inventory.splice(index, 1)[0];
  
      switch (potion.name) {
        case 'agility':
          this.agility += potion.value;
          break;
        case 'health':
          this.health += potion.value;
          break;
        case 'strength':
          this.strength += potion.value;
          break;
      }
    }
  }
  

  
    //one way
/* function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
  
    this.inventory = [new Potion('health'), new Potion()];
  
    // returns an object with various player properties
    this.getStats = function() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    };
  
    // returns the inventory array or false if empty
    this.getInventory = function() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    };
  } */
  
  module.exports = Player;