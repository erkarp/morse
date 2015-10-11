var options = {
	toggle: "active",
    string: "SOS", 
    time: 250
};

Array.prototype.add = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		this.push(arr[i]);
		this.push(-1);
	}
};

String.prototype.convertToMorse = function() {
    var array = this.split(''), 
		morse = []; 
	
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

function blinkText(text, count) {
	
	toggle(text[count]);
	
	window.setTimeout(function() {
		
		isThereMore(text, ++count) ? 
			blinkText(text, count) :
			console.log("end");
					
	}, Math.abs(text[count] * options.time));
};

function toggle(time){
	elem = document.getElementById(options.element);
	console.log(time, elem.classList);
	
	if (time > 0 && !elem.classList.contains(options.toggle)) {
		elem.classList.add(options.toggle);
	} else {
		elem.classList.remove(options.toggle);
	}
};

function isThereMore(array, count) {
	if (array[count+1] == undefined) {
		return false; 
	}
	return true; 
}

function morseFlicker(element, userOpts){
    if (typeof arguments[0] != 'string') {
        return; 
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
	console.log(morse);
	blinkText(morse, 0);
};




 
// Demo

function morse(id) {
	morseFlicker(id, {
		toggle: 'blink',
		time: 400
	});
};