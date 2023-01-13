// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(dmg){
        this.health -= dmg;
        // console.log(this.health);
    }
}


// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(dmg){
        this.health -= dmg;
        let isAlive = this.health > 0;
        if(isAlive){
            return(`${this.name} has received ${dmg} points of damage`) 
        }else{
             return (`${this.name} has died in act of combat`)
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    } 

}

let magma = new Viking("Ragnar", 1000, 10);
console.log(magma);
magma.receiveDamage(200)


// Saxon
class Saxon extends Soldier {
    // constructor(health, strength) {
    //     super(health, strength);
    // }

    receiveDamage(dmg){
        this.health -= dmg;
        let isAlive = this.health > 0;
        if(isAlive){
            return(`A Saxon has received ${dmg} points of damage`) 
        }else{
             return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor(vikingArmy= [], saxonArmy = []) {
        this.vikingArmy = vikingArmy,
        this.saxonArmy = saxonArmy
    }
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }

    armyAttack(what){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let receivedDmg, indexOfSaxon,indexOfViking,saxonDead, vikingDead;

        if(what === vikAtk){
            receivedDmg = randomSaxon.receiveDamage(randomViking.strength);
            indexOfSaxon = this.saxonArmy.indexOf(randomSaxon);
            saxonDead = randomSaxon.health <= 0;

        }else if(what === saxAtk){
            receivedDmg = randomSaxon.receiveDamage(randomViking.strength);
            indexOfViking = this.saxonArmy.indexOf(randomSaxon);       
            vikingDead = randomSaxon.health <= 0;
        }

        if(what === vikAtk&& saxonDead){
            this.saxonArmy.splice(indexOfSaxon, 1);
        }else if(what === saxAtk&& vikingDead){
            this.vikingArmy.splice(indexOfViking, 1);
        }

        return receivedDmg
    }

    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let receivedDmg = randomSaxon.receiveDamage(randomViking.strength);
        let indexOfSaxon = this.saxonArmy.indexOf(randomSaxon);
        let saxonDead = randomSaxon.health <= 0;
        if(saxonDead){
            this.saxonArmy.splice(indexOfSaxon, 1);
        }

        return receivedDmg
    }

    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let receivedDmg = randomViking.receiveDamage(randomSaxon.strength);
        let indexOfViking = this.vikingArmy.indexOf(randomViking);
        let vikingDead = randomViking.health <= 0;
        if(vikingDead){
            this.vikingArmy.splice(indexOfViking, 1);
        }

        return receivedDmg
    }


    showStatus(){
        
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
