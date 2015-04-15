/*
 * A simple script loader
 */
var load = function (url) {
    var node = document.createElement("script"); // A necessary side effect

    node.src = url;

    document.head.appendChild(node); // A necessary side effect

    return node;
};


/*
 * A simple element selector
 */
var select = function(selector) {
    return document.querySelector(selector); // A necessary side effect
};


/*
 * updateButton
 */
var updateButton = function(button, text) {
    button.innerHTML = text; // Again, necessary
};
