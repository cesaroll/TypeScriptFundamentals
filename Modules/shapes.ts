interface IRectangle {
    height: number;
    width: number;
    getArea(): number;
}

// namespace
// Are modules that create an IIFE (Immediatly-Invoked Function Expression)
namespace Shapes {

    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number) {
        }

        getArea(): number {
            return this.height * this.width;
        }
    }

}


namespace myProgram {

    run();

    function run() {
        var myRectangle: IRectangle = new Shapes.Rectangle(2, 4);
        var area = myRectangle.getArea();
        console.log(`Area: ${area}`);
    }
}



//Extending Shapes module

namespace Shapes {

    export class Circle {
        constructor(public radious: number) {

        }
    }
}

var myCircle = new Shapes.Circle(20);