/*
 * A simple script loader
 */
var load = function (url) {
    var node = document.createElement("script"); // Reading data in - a necessary side effect

    node.src = url;

    document.head.appendChild(node); // Modifying state - a necessary side effect

    return node;
};


/*
 * A simple element selector
 */
var select = function(selector) {
    return document.querySelector(selector); // Reading data in - a necessary side effect
};


/*
 * Updates the text of a button
 */
var updateButton = function(button, text) {
    button.innerHTML = text; // Modifying state - necessary
};
