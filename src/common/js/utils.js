var Util = function () {
    return {
        getElements: function (obj) {
            return document.querySelectorAll(obj);
        },
        bindEventListener: function (obj, evt, fn) {
            let elements = this.getElements(obj);
            elements.forEach(function(elm){
                elm.removeEventListener(evt, fn);
                elm.addEventListener(evt, fn);
            })
        }
    }
};

// function Util(){}
// Util.prototype.getQueryResult = function(queryObject) {
//     return document.querySelector(queryObject);
// }
// Util.prototype.bindEventListener = function(name, type = "", event, callback) {
//     debugger;
//     let queryObject = this.getQueryResult(`${type}${name}`);
// }

// export class Util {
//     constructor() { }
//     getQueryResult(queryObject) {
//         return document.querySelector(queryObject);
//     }
//     bindEventListener(name, type = "", event, callback) {
//         debugger;
//         let queryObject = this.getQueryResult(`${type}${name}`);
//     }
// }
module.exports = Util();
