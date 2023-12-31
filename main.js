"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//data types
var message = "hello world";
console.log(message);
var test = true;
console.log(test);
var id = 5;
//Array
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
//tuple
var person1 = ['viswa', 6]; //it should match with types entered and same order
console.log(id, list1, list2, person1);
//enum
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
var c = color.Green;
console.log(c);
//any type
var unknown = true;
unknown = 'jhgfgh';
unknown = 8;
console.log(unknown);
