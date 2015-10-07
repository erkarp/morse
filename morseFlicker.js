var options = {
	toggle: "active",
    string: "SOS", 
    time: 1
};

Array.prototype.add = function(arr) {
    arr.forEach(function(item) {
		this.push(item);
    });
};
String.prototype.convertToMorse = function() {
    var array = this.split(''), morse; 
    array.forEach(function(char) {
        switch(elem) {
            case ' ': morse.concat([-2]); break;
            case 'a': morse.concat([1,2]); break;
            case 'b': morse.concat([2,1,1,1]); break;
            case 'c': morse.concat([2,1,2,1]); break;
            case 'd': morse.concat([2,1,1]); break;
            case 'e': morse.concat([1]); break;
            case 'f': morse.concat([1,1,2,1]); break;
            case 'g': morse.concat([2,2,1]); break;
            case 'h': morse.concat([1,1,1,1]); break;
            case 'i': morse.concat([1,1]); break;
            case 'j': morse.concat([1,2,2,2]); break;
            case 'k': morse.concat([2,1,2]); break;
            case 'l': morse.concat([1,2,1,1]); break;
            case 'm': morse.concat([2,2]); break;
            case 'n': morse.concat([2,1]); break;
            case 'o': morse.concat([2,2,2]); break;
            case 'p': morse.concat([1,2,2,1]); break;
            case 'q': morse.concat([2,2,1,2]); break;
            case 'r': morse.concat([1,2,1]); break;
            case 's': morse.concat([1,1,1]); break;
            case 't': morse.concat([2]); break;
            case 'u': morse.concat([1,1,2]); break;
            case 'v': morse.concat([1,1,1,2]); break;
            case 'w': morse.concat([1,2,2]); break;
            case 'x': morse.concat([2,1,1,2]); break;
            case 'y': morse.concat([2,1,2,2]); break;
            case 'z': morse.concat([2,2,1,1]); break;
        }
    });
    return morse;
}; 

function convertMorseToNums(s) {
    var array = s.split(''), array2;
    array.
}

function blink(element, toggle, time) {
    document.getElementsByClassName(element).classList.add(toggle);
    window.setTimeout(function() {
        document.getElementsByClassName(element).classList.remove(toggle);
    }, time);
}

function morseFlicker(element, toggle, string, userOpts){
    if (typeof arguments[0] != 'string') {
        throwError; return; 
    }
    
    for (var opt in options) {
        if (userOpts[opt] != undefined 
            && typeof userOpts[opt] === typeof options[opt]) {
            options[opt] = userOpts[opt];
        }
    }
    
    var morse = options.string.convertToMorse(); 
    var array = convertMorseToNums(morse);
    
    morse.forEach(function(i){
        blink(i);
    });
}




 
// Demo
morseFlicker('morse-class', {
    toggle: 'active',
    string: 'This is my text',
    time: 1
});