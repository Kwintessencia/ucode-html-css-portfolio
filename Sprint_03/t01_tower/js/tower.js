class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
};
class Tower extends Building {
    constructor(floors, material, address, hasElevator, arcCapacity, height){
        super(floors, material, address);
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = +height;
        this.floors = +floors
    }
    get hasElevator(){
        return this._hasElevator;
    }
    set hasElevator(value){
        if (value != true){
            return this._hasElevator = '-';
        }
        return this._hasElevator = '+';
    }
    getFloorHeight(){
        return (this.height/this.floors);
    }
    toString(){
        return [`${super.toString()}`,
        `Elevator: ${this.hasElevator}`,
        `Arc reactor capacity: ${this.arcCapacity}`,
        `Height: ${this.height}`,
        `Floor Height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
};