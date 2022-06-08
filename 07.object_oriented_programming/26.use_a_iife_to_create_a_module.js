// challenge >
// Create a module named funModule to wrap the two mixins isCuteMixin and 
// singMixin. funModule should return an object.

// let isCuteMixin = function(obj) {
//     obj.isCute = function() {
//         return true;
//     };
// };
// let singMixin = function(obj) {
//     obj.sing = function() {
//         console.log("Singing to an awesome tune");
//     };
// };

let funModule = (() => {
    return {
        isCuteMixin: obj => {
            obj.isCute = () => {
                return true;
            };
        },

        singMixin: obj => {
            obj.sing = () => {
                console.log("Singing to an awesome tune");
            };
        },
    };
})();

let obj = {};

funModule.isCuteMixin(obj);
funModule.singMixin(obj);

console.log(obj.isCute());
obj.sing();
