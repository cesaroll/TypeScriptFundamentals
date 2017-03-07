var CarModule;
(function (CarModule) {
    var Engine = (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        Engine.prototype.toString = function () {
            return this.engineType + " - " + this.horsePower + " HP";
        };
        return Engine;
    }());
    var Car = (function () {
        // Constructor
        function Car(name, engine) {
            this.name = name;
            this.engine = engine;
        }
        Object.defineProperty(Car.prototype, "name", {
            // Properties
            get: function () {
                return this._name;
            },
            set: function (value) {
                if (!value)
                    throw "Please supply car name!";
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (!value)
                    throw "Please supply an Engine!";
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        // Functions
        Car.prototype.toString = function () {
            return "Car: " + this.name + ", Engine: " + this.engine.toString();
        };
        return Car;
    }());
    var engine = new Engine(300, 'V8');
    var car = new Car("Mustang", engine);
    console.log(car.toString());
})(CarModule || (CarModule = {}));
