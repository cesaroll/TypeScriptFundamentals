var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert("Engine started: " + this.engine);
    };
    Car.prototype.stop = function () {
        alert("Engine stopped: " + this.engine);
    };
    Car.prototype.accellerate = function (acc) {
        alert("Accellerating: ");
    };
    return Car;
}());
window.onload = function () {
    var car = new Car("V8");
    car.start();
    car.accellerate(2.1);
    car.stop();
};
