class Car {
    
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    start() : void {        
        console.log(`Engine started: ${this.engine}`);
    }

    stop() : void {
        console.log(`Engine stopped: ${this.engine}`);
    }

    accellerate (acc: number) : void {
        console.log(`Accellerating: ${acc}`);
    }

}

var myCar = new Car("V8");
myCar.start();
myCar.accellerate(2.1);
myCar.stop();
