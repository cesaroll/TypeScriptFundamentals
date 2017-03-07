var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Engine started: " + this.engine);
    };
    Car.prototype.stop = function () {
        console.log("Engine stopped: " + this.engine);
    };
    Car.prototype.accellerate = function (acc) {
        console.log("Accellerating: " + acc);
    };
    return Car;
}());
var myCar = new Car("V8");
myCar.start();
myCar.accellerate(2.1);
myCar.stop();
