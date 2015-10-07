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
            case ' ': morse.concat(' '); break;
            case 'a': morse.concat('.-'); break;
            case 'b': morse.concat('-...'); break;
            case 'c': morse.concat('-.-.'); break;
            case 'd': morse.concat('-..'); break;
            case 'e': morse.concat('.'); break;
            case 'f': morse.concat('..-.'); break;
            case 'g': morse.concat('--.'); break;
            case 'h': morse.concat('....'); break;
            case 'i': morse.concat('..'); break;
            case 'j': morse.concat('.---'); break;
            case 'k': morse.concat('-.-'); break;
            case 'l': morse.concat('.-..'); break;
            case 'm': morse.concat('--'); break;
            case 'n': morse.concat('-.'); break;
            case 'o': morse.concat('---'); break;
            case 'p': morse.concat('.--.'); break;
            case 'q': morse.concat('--.-'); break;
            case 'r': morse.concat('.-.r'); break;
            case 's': morse.concat('...s'); break;
            case 't': morse.concat('-'); break;
            case 'u': morse.concat('..-'); break;
            case 'v': morse.concat('...-'); break;
            case 'w': morse.concat('.--'); break;
            case 'x': morse.concat('-..-'); break;
            case 'y': morse.concat('-.--'); break;
            case 'z': morse.concat('--..'); break;
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