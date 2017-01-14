import * as ko from "knockout";

class AppViewModel {

    firstName: KnockoutObservable<string>
    lastName: KnockoutObservable<string>
    fullName: KnockoutComputed<string>  

    constructor(firstName: string, lastName: string) {
        this.firstName = ko.observable("Bert");
        this.lastName = ko.observable("Bertington");

        this.fullName = ko.computed(function() {
            return this.firstName() + " " + this.lastName();
            }, this);        
    }

    capitalizeLastName () {
        var currentVal = this.lastName();
        this.lastName(currentVal.toUpperCase());
    }

    
}

ko.applyBindings(new AppViewModel("Bert", "Bertington"));

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