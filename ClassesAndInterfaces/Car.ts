module CarModule {

    class Engine {

            constructor(public horsePower: number,
                        public engineType: string) {

            }

            toString(): string {
                return `${this.engineType} - ${this.horsePower} HP`;
            }

        }

    class Car {
        
        private _name: string;
        private _engine: Engine;

        // Constructor
        constructor(name:string, engine: Engine) {
            this.name = name;
            this.engine = engine;
        }

        // Properties

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            if(!value) throw "Please supply car name!";
            this._name = value;
        }

        get engine(): Engine {
            return this._engine;
        }
        
        set engine(value: Engine) {
            if(!value) throw "Please supply an Engine!";
            this._engine = value;
        }

        // Functions

        toString() : string {
            return `Car: ${this.name}, Engine: ${this.engine.toString()}`;
        }
    }


    var engine = new Engine(300, 'V8');
    var car = new Car("Mustang", engine);

    console.log(car.toString());

}

