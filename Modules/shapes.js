// namespace
// Are modules that create an IIFE (Immediatly-Invoked Function Expression)
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var myProgram;
(function (myProgram) {
    run();
    function run() {
        var myRectangle = new Shapes.Rectangle(2, 4);
        var area = myRectangle.getArea();
        console.log("Area: " + area);
    }
})(myProgram || (myProgram = {}));
//Extending Shapes module
(function (Shapes) {
    var Circle = (function () {
        function Circle(radious) {
            this.radious = radious;
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var myCircle = new Shapes.Circle(20);
