"use strict";
var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log(this.real + "," + this.imaginary + "i");
    };
    return Complex;
}());
var a = new Complex(3, 4);
var b = new Complex(4, 6);
var c = a.add(b);
var d = a.sub(b);
var e = a.mod();
console.log(c.toString());
console.log(d.toString());
console.log(e);
