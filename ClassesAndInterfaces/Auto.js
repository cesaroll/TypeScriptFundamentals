var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AutoModule;
(function (AutoModule) {
    var Engine = (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        Engine.prototype.toString = function () {
            return this.engineType + " - " + this.horsePower + " HP";
        };
        Engine.prototype.start = function (callback) {
            var _this = this;
            setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        Engine.prototype.stop = function (callback) {
            var _this = this;
            setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        return Engine;
    }());
    var CustomEngine = (function () {
        function CustomEngine() {
        }
        CustomEngine.prototype.toString = function () {
            return "Custom Engine - 450 HP";
        };
        CustomEngine.prototype.start = function (callback) {
            setTimeout(function () {
                callback(true, "Custom Engine");
            }, 1000);
        };
        CustomEngine.prototype.stop = function (callback) {
            setTimeout(function () {
                callback(true, "Custom Engine");
            }, 1000);
        };
        return CustomEngine;
    }());
    var Accesory = (function () {
        function Accesory(accessoryNumber, title) {
            this.accessoryNumber = accessoryNumber;
            this.title = title;
        }
        return Accesory;
    }());
    var Auto = (function () {
        // Constructor
        function Auto(basePrice, engine, make, model) {
            this.basePrice = basePrice;
            this.engine = engine;
            this.make = make;
            this.model = model;
        }
        // Functions
        Auto.prototype.calculateTotal = function () {
            var taxRate = .08;
            return this.basePrice * (1 + taxRate);
        };
        Auto.prototype.toString = function () {
            var str = "      Make: " + this.make + "\n";
            str += "     Model: " + this.model + "\n";
            str += "     Price: " + this.basePrice + "\n";
            str += "    Engine: " + this.engine.toString() + "\n";
            str += "Accesories: " + this.getAccesories() + "\n";
            return str;
        };
        // Properties
        Auto.prototype.getAccesories = function () {
            return (this._accesoryList) ? this._accesoryList : "";
        };
        Auto.prototype.setAccesories = function () {
            var _this = this;
            var accesories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                accesories[_i] = arguments[_i];
            }
            this._accesoryList = "";
            accesories.forEach(function (ac) {
                _this._accesoryList += ac.accessoryNumber + " " + ac.title + ", ";
            });
            this._accesoryList = this._accesoryList.trim();
            if (this._accesoryList.charAt(this._accesoryList.length - 1) === ",")
                this._accesoryList = this._accesoryList.slice(0, -1);
        };
        Object.defineProperty(Auto.prototype, "basePrice", {
            get: function () {
                return this._basePrice;
            },
            set: function (value) {
                if (value <= 0)
                    throw "Price must be greater than zero.";
                this._basePrice = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Auto.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (!value)
                    throw "Please supply an engine.";
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        return Auto;
    }());
    var Truck = (function (_super) {
        __extends(Truck, _super);
        function Truck(basePrice, engine, make, model, bedLength, fourByFour) {
            var _this = _super.call(this, basePrice, engine, make, model) || this;
            _this.bedLength = bedLength;
            _this.fourByFour = fourByFour;
            return _this;
        }
        Truck.prototype.toString = function () {
            var str = _super.prototype.toString.call(this);
            str += "Bed Length: " + this.bedLength + "\n";
            str += "       4WD: " + this.fourByFour + "\n";
            return str;
        };
        return Truck;
    }(Auto));
    //var myTruck = new Truck(40000, new Engine(300, "V8"), "Ford", "F-150", "Short Bed", true);
    var myTruck = new Truck(40000, new CustomEngine(), "Ford", "F-150", "Short Bed", true);
    myTruck.setAccesories(new Accesory(1234, "Chrome Package"), new Accesory(4321, "Towing Package"), new Accesory(5467, "Sunroof"));
    console.log(myTruck.toString());
    myTruck.engine.start(function (status, engineType) {
        console.log(engineType + " was started.");
    });
})(AutoModule || (AutoModule = {}));
