"use strict";

// var Util = function () {
//     return {
//         getElement: function (obj) {
//             return document.querySelector(obj);
//         },
//         getElements: function (obj) {
//             return document.querySelectorAll(obj);
//         },
//         bindEventListener: function (obj, evt, fn) {
//             let elements = this.getElements(obj);
//             elements.forEach(function(elm){
//                 elm.removeEventListener(evt, fn);
//                 elm.addEventListener(evt, fn);
//             });
//         }
//     };
// };

// function Util(){}
// Util.prototype.getQueryResult = function(queryObject) {
//     return document.querySelector(queryObject);
// }
// Util.prototype.bindEventListener = function(name, type = "", event, callback) {
//     debugger;
//     let queryObject = this.getQueryResult(`${type}${name}`);
// }

export class Util {
    constructor() { }
    getElement(obj) {
        return document.querySelector(obj);
    }
    getElements(obj="") {
        return document.querySelectorAll(obj);
    }
    bindEventListener(obj="", evt, fn) {
        let elements = this.getElements(obj);
        elements.forEach(function(elm){
            elm.removeEventListener(evt, fn);
            elm.addEventListener(evt, fn);
        });
    }
}
//module.exports = Util;
//export default Util;
