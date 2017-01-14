import * as ko from "knockout";

class Meal {

    mealName: string
    price: number

    constructor(mealName: string, price: number) {
        this.mealName = mealName 
        this.price = price
    }

}

class SeatReservation {

    name: string
    meal: KnockoutObservable<Meal>

    constructor(name: string, initialMeal: Meal) {
        this.name = name;
        this.meal = ko.observable(initialMeal);
    }

}

class AppViewModel {

    firstName: KnockoutObservable<string>
    lastName: KnockoutObservable<string>
    fullName: KnockoutComputed<string>  

    availableMeals: [Meal]
    seats: KnockoutObservableArray<SeatReservation>

    constructor() {
       
       this.availableMeals = [
           new Meal("Standard (sandwich)", 0),
           new Meal("Premium (lobster)", 34.95)
       ]

       this.seats = ko.observableArray([
           new SeatReservation("Steve", this.availableMeals[0]),
           new SeatReservation("Bert", this.availableMeals[0])
       ]);

    }

    addSeat() {
        this.seats.push(new SeatReservation("", this.availableMeals[0]));
    }

}

ko.applyBindings(new AppViewModel());

// class HelloViewModel {
//     language: KnockoutObservable<string>
//     framework: KnockoutObservable<string>

//     sum: KnockoutObservable<number>

//     constructor(language: string, framework: string, sum: number) {
//         this.language = ko.observable(language);
//         this.framework = ko.observable(framework);

//         this.sum = ko.observable(sum);

//     }
// }

// ko.applyBindings(new HelloViewModel("Robert", "Dickerson", 0));