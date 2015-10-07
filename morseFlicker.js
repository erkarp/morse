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
            case ' ': morse.add([-2]); break;
            case 'a': morse.add([1,2]); break;
            case 'b': morse.add([2,1,1,1]); break;
            case 'c': morse.add([2,1,2,1]); break;
            case 'd': morse.add([2,1,1]); break;
            case 'e': morse.add([1]); break;
            case 'f': morse.add([1,1,2,1]); break;
            case 'g': morse.add([2,2,1]); break;
            case 'h': morse.add([1,1,1,1]); break;
            case 'i': morse.add([1,1]); break;
            case 'j': morse.add([1,2,2,2]); break;
            case 'k': morse.add([2,1,2]); break;
            case 'l': morse.add([1,2,1,1]); break;
            case 'm': morse.add([2,2]); break;
            case 'n': morse.add([2,1]); break;
            case 'o': morse.add([2,2,2]); break;
            case 'p': morse.add([1,2,2,1]); break;
            case 'q': morse.add([2,2,1,2]); break;
            case 'r': morse.add([1,2,1]); break;
            case 's': morse.add([1,1,1]); break;
            case 't': morse.add([2]); break;
            case 'u': morse.add([1,1,2]); break;
            case 'v': morse.add([1,1,1,2]); break;
            case 'w': morse.add([1,2,2]); break;
            case 'x': morse.add([2,1,1,2]); break;
            case 'y': morse.add([2,1,2,2]); break;
            case 'z': morse.add([2,2,1,1]); break;
			default: morse.add([-2]);
    });
    return morse;
}; 

function blink(time) {
	time>0 ? document.getElementsByClassName(options.element).classList.add(options.toggle):;
	
    window.setTimeout(function() { 
		time>0 ? document.getElementsByClassName(options.element).classList.remove(options.toggle):;
	}, abs(time*1000));
};
	
function flashText(text) {
	text.forEach(function(signal) {
		blink(signal);
		blink(-1);
	});
};

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
};




 
// Demo
morseFlicker('morse-class', {
    toggle: 'active',
    string: 'This is my text',
    time: 1
});