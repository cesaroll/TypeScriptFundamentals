module demo_02_08 {

    // Function Interface

    interface SquareFunction {
        (x: number) : number;
    }

    // Define a function that follows the interface

    var squareItBasic : SquareFunction = (num) => num * num;

    console.log(`Square of 2: ${squareItBasic(2)}`);

    // Rectangle Interface
    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareIt = function (rect: Rectangle) : number {

        if(rect && rect.h) {
            if(rect.w)
                return rect.h * rect.w;

            return rect.h * rect.h;
        }
        else {
            return 0;
        }
        
    }

    var rect1 = {h: 8};
    var rect2 = {h: 8, w: 5};
    console.log(`Rectangle square: ${squareIt(rect1)}`);
    console.log(`Rectangle square: ${squareIt(rect2)}`);

}