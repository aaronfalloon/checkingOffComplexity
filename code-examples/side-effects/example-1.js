var additions_counter = 0;

var add = function(a, b) {
    additions_counter++; // A side effect

    return a + b;
};
