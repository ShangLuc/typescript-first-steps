export class Car {
    model : string;
    brand : string;
    color : string;
    year : number;
    speed : number;
    started : boolean;

    constructor(model : string, brand : string, color : string, year : number, speed : number, started : boolean) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
    }

    start() : void {
        this.started = true;
    }

    stop() : void {
        this.started = false;
        this.speed = 0;
    } 

    accelerate(amount : number) : void {
        if (this.started) {
           this.speed += amount; 
        }

        else {
            console.error(`The ${this.brand} ${this.model} ${this.color} of ${this.year} is not started yet`);
        }
        
    }

    brake(amount : number) : void {
        if (this.speed - amount >= 0) {
            this.speed = this.speed - amount;
        } else {
            this.speed = 0;
        }
    }

    status(): (string | number | boolean)[] {
        return [ "model :" + this.model, "brand :" + this.brand, "color :" + this.color, `year : ${this.year}`, `speed : ${this.speed}`, `started : ${this.started}`];
    }
}

