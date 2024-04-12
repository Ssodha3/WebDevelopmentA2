//when html is loaded
document.addEventListener("DOMContentLoaded", () => {
    //constructor
    function Animal(name, species, noise) {
        this.name = name;
        this.species = species;
        this.noise = noise;
    }

    //method1 sound
    Animal.prototype.sound = function() {
        return this.name + " the " + this.species + " says: " + this.noise +" ";
    }

    //method2 say
    Animal.prototype.say = function(message) {
        return this.name + " the " + this.species + " says: " + message +" ";
    }

    //created new animal 
    var duck = new Animal("Donald", "Duck", "Aw, Phooey!");
    var rabbit = new Animal("Buggs", "Bunny", "What's up Doc?!");
    var lion = new Animal("Panthera leo", "Lion", "Roar!");
    var cat = new Animal("Felis catus", "Cat", "Mew!");
    
    //print in console via calling method
    console.log(duck.sound()); 
    console.log(rabbit.sound()); 
    console.log(lion.sound());
    console.log(cat.sound());  

    console.log(duck.say("Coding is boring!")); 
    console.log(rabbit.say("Coding is fun!"));
    console.log(lion.say("Coding is great!"));
    console.log(cat.say("Coding is worst!"));

    //show in html page
    document.getElementById("printSound").innerHTML = duck.sound() + rabbit.sound() + lion.sound() + cat.sound();
    document.getElementById("printSay").innerHTML = duck.say("Coding is boring!")+ rabbit.say("Coding is fun!") + lion.say("Coding is great!") + cat.say("Coding is worst!");

})
