class Ninja {
    constructor(firstName, health) {
        this.firstName = firstName;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.firstName)
    }
    showStats() {
        console.log(this.firstName,this.health,this.speed,this.strength)
    }
    drinkSake() {
        console.log(this.health += 10);
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
