module AutoModule {

    class Engine {

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

    class Accesory {
        constructor(public accessoryNumber: number, public title: string) {

        }
    }

    class Auto {

        private _basePrice: number;
        private _engine: Engine;
        make: string;
        model: string;
        private _accesoryList: string;
        
        // Constructor
        constructor(basePrice: number, engine: Engine, make: string, model: string) {
            this.basePrice = basePrice;
            this.engine = engine;
            this.make = make;
            this.model = model;
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

        get engine(): Engine {
            return this._engine;
        }

        set engine(value: Engine) {
            if(!value) throw `Please supply an engine.`;
            this._engine = value;
        }

    }

    class Truck extends Auto {
        
        constructor(basePrice: number, engine: Engine, make: string, model: string, 
            public bedLength: string, public fourByFour: boolean) {
                super(basePrice, engine, make, model);
        }

        toString(): string {
            let str = super.toString();            
            str +=    `Bed Length: ${this.bedLength}\n`;
            str +=    `       4WD: ${this.fourByFour}\n`;

            return str;
        }
    }

    var myTruck = new Truck(40000, new Engine(300, "V8"), "Ford", "F-150", "Short Bed", true);

    myTruck.setAccesories(new Accesory(1234, "Chrome Package"), new Accesory(4321, "Towing Package"),
                            new Accesory(5467, "Sunroof"));

    console.log(myTruck.toString());

    myTruck.engine.start((status, engineType) => {
        console.log(`${engineType} was started.`);
    });

}