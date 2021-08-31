class Ninja {
    constructor(firstName, health, speed, strength){
    this.firstName = firstName;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }

    sayName () {
        console.log(`Welcome ${this.firstName}`);
    }

    showStats () {
        console.log(`Our Ninjas are tops. ${this.firstName}'s health is ${this.health} points, their speed is ${this.speed}, and thier strength is ${this.strength}.`)
    }

    drinkSake () {
        console.log(`Drinking sake warms the heart and improves health!`)
        this.health += 10;
        return this;
    }
}

const anna = new Ninja("anna", 100, 100, 100);
anna.sayName();
anna.showStats();
anna.drinkSake();
console.log(`after sake anna's health is ${anna.health}`);