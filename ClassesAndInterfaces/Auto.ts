module AutoModule {

    interface IEngine {

        start(callback: (startStatus: boolean, engineType: string) => void): void;
        stop(callback: (startStatus: boolean, engineType: string) => void): void;

    }

    interface IAutoOptions {
        basePrice: number;
        engine: IEngine;
        state: string;
        make: string;
        model: string;
        year: number;
    }

    interface ITruckOptions extends IAutoOptions {
        bedLength: string;
        fourByFour: boolean;
    }

    class Engine implements IEngine {

            constructor(public horsePower: number,
                        public engineType: string) {

            }

            toString(): string {
                return `${this.engineType} - ${this.horsePower} HP`;
            }

            start(callback: (startStatus: boolean, engineType: string) => void) {
                setTimeout( () => {
                    callback(true, this.engineType);
                }, 1000);
            }

            stop(callback: (stopStatus: boolean, engineType: string) => void) {
                setTimeout( () => {
                    callback(true, this.engineType);
                }, 1000);
            }

        }

    class CustomEngine implements IEngine {

        toString(): string {
                return `Custom Engine - 450 HP`;
            }

            start(callback: (startStatus: boolean, engineType: string) => void) {
                setTimeout( () => {
                    callback(true, "Custom Engine");
                }, 1000);
            }

            stop(callback: (stopStatus: boolean, engineType: string) => void) {
                setTimeout( () => {
                    callback(true, "Custom Engine");
                }, 1000);
            }
    }

    class Accesory {
        constructor(public accessoryNumber: number, public title: string) {

        }
    }

    class Auto {

        private _basePrice: number;
        private _engine: IEngine;
        state: string;
        make: string;
        model: string;
        year: number;
        private _accesoryList: string;
        
        // Constructor
        constructor(options: IAutoOptions) {
            this.basePrice = options.basePrice;
            this.engine = options.engine;
            this.state = options.state;
            this.make = options.make;
            this.model = options.model;
            this.year = options.year;
        }

        // Functions
        calculateTotal(): number {
            var taxRate = .08;
            return this.basePrice * (1 + taxRate);
        }

        toString(): string {
            var str = `      Make: ${this.make}\n`;
            str +=    `     Model: ${this.model}\n`;
            str +=    `     Price: ${this.basePrice}\n`;
            str +=    `    Engine: ${this.engine.toString()}\n`;
            str +=    `Accesories: ${this.getAccesories()}\n`;

            return str;
        }

        // Properties

        getAccesories(): string {
            return (this._accesoryList)? this._accesoryList : "";
        }

        setAccesories(...accesories: Accesory[]) {
            this._accesoryList = ""
            accesories.forEach(ac => {
                this._accesoryList += ac.accessoryNumber + " " + ac.title + ", ";
            });

            this._accesoryList = this._accesoryList.trim();

            if(this._accesoryList.charAt(this._accesoryList.length - 1) === ",")
                this._accesoryList = this._accesoryList.slice(0,-1);
        }

        
        get basePrice(): number {
            return this._basePrice;
        }

        set basePrice(value: number) {
            if(value <= 0) throw `Price must be greater than zero.`;
            this._basePrice = value;
        }

        get engine(): IEngine {
            return this._engine;
        }

        set engine(value: IEngine) {
            if(!value) throw `Please supply an engine.`;
            this._engine = value;
        }

    }

    class Truck extends Auto {
        
        bedLength: string;
        fourByFour: boolean;

        constructor(options: ITruckOptions,) {
                super(options);
                this.bedLength = options.bedLength;
                this.fourByFour = options.fourByFour;
        }

        toString(): string {
            let str = super.toString();            
            str +=    `Bed Length: ${this.bedLength}\n`;
            str +=    `       4WD: ${this.fourByFour}\n`;

            return str;
        }
    }

    //var myTruck = new Truck(40000, new Engine(300, "V8"), "Ford", "F-150", "Short Bed", true);
    //var myTruck = new Truck(40000, new CustomEngine(), "Ford", "F-150", "Short Bed", true);
    var myTruck = new Truck({
        basePrice: 45000,
        engine: new CustomEngine(),
        state: "Texas",
        make: "Ford",
        model: "F-150",
        year: 2017,
        bedLength: "Short Bed",
        fourByFour: true
    });

    myTruck.setAccesories(new Accesory(1234, "Chrome Package"), new Accesory(4321, "Towing Package"),
                            new Accesory(5467, "Sunroof"));

    console.log(myTruck.toString());

    myTruck.engine.start((status, engineType) => {
        console.log(`${engineType} was started.`);
    });

}