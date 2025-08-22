export class HardWorker {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get age(){
        return this._age;
    }
    set age(ageNumber){
        if (ageNumber<=1 || ageNumber>100){
            return;
        }
        return this._age = ageNumber;
    }
    get salary(){
        return this._salary;
    }
    set salary(sNumber){
        if (sNumber<=100 || sNumber>10000){
            return;
        }
        return this._salary = sNumber;
    }
    toObject(){
        return {name: this.name, age: this.age, salary: this.salary};
    }
    };
    
