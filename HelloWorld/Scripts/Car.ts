class Car {
    
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    start() {        
        alert(`Engine started: ${this.engine}`);
    }

    stop() {
        alert(`Engine stopped: ${this.engine}`);
    }

    accellerate (acc: number) {
        alert(`Accellerating: `);
    }

}

window.onload = function () {

    var car = new Car("V8");
    car.start();
    car.accellerate(2.1);
    car.stop();

    
}