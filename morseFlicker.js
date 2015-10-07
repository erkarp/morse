var options = {
	toggle: "active",
    string: "SOS", 
    time: 1
};

Array.prototype.add = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		this.push(arr[i]);
	}
};

String.prototype.convertToMorse = function() {
    var array = this.split(''), 
		morse = []; 
//	console.log(array);
    array.forEach(function(char) {
        switch(char) {
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
		}
    });
    return morse;
}; 


/*
function blink(time) {
//	console.log("processed time: ", Math.abs(time*1000), " options: ", options);
	time>0 ? document.getElementById(options.element).classList.add(options.toggle)
	: function(){} ;
	
    window.setTimeout(function() { 
		time>0 ? document.getElementById(options.element).classList.remove(options.toggle)
		: function(){} ;
	}, Math.abs(time*1000));
};
	
function flashText(text) {
	text.forEach(function(signal) {
		console.log(signal);
		blink(signal);
		blink(-1);
	});
};
*/

function blinkText(text) {
	var count = 0;
	var oneBlink = function(time) {
		window.setTimeout(function() {
			if (time > 0) {
 				document.getElementById(options.element).classList.remove(options.toggle);
				document.getElementById(options.element).classList.add(options.toggle);
			}
			if (text[++count] != undefined) {
				oneBlink(text[count]);
			}
		}, Math.abs(time*1000));
	};
	oneBlink(text[count]);
};

function morseFlicker(element, userOpts){
    if (typeof arguments[0] != 'string') {
        throwError; return; 
    }
	
	options.element = element;
    
    for (var opt in options) {
        if (userOpts[opt] != undefined 
            && typeof userOpts[opt] === typeof options[opt]) {
            options[opt] = userOpts[opt];
        }
    }
    
	options.string = options.string.toLowerCase();
    var morse = options.string.convertToMorse(); 
//	console.log(morse);
	blinkText(morse);
};




 
// Demo
morseFlicker('box', {
    toggle: 'active',
    string: 'This is my text',
    time: 1
});