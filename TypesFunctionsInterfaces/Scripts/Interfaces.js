var demo_02_08;
(function (demo_02_08) {
    // Function Interface
    // Define a function that follows the interface
    var squareItBasic = function (num) { return num * num; };
    console.log("Square of 2: " + squareItBasic(2));
    var squareIt = function (rect) {
        if (rect && rect.h) {
            if (rect.w)
                return rect.h * rect.w;
            return rect.h * rect.h;
        }
        else {
            return 0;
        }
    };
    var rect1 = { h: 8 };
    var rect2 = { h: 8, w: 5 };
    console.log("Rectangle square: " + squareIt(rect1));
    console.log("Rectangle square: " + squareIt(rect2));
})(demo_02_08 || (demo_02_08 = {}));
