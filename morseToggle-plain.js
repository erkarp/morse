var options = {
	toggle: "active",
    string: "SOS", 
    time: 250
};

Array.prototype.add = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		this.push(arr[i]);
		this.push(-.5);
	}
	return this; 
};

Array.prototype.flatten = function() {
	return this.reduce(function(bigArr, curArr) {
		return bigArr.add(curArr);
	}, []);
}

String.prototype.convertToMorse = function() {
    var array = this.split(''), 
		morse = []; 
	
    array.forEach(function(char) {
        switch(char) {
            case ' ': morse.push([-2]); break;
            case 'a': morse.push([1,2]); break;
            case 'b': morse.push([2,1,1,1]); break;
            case 'c': morse.push([2,1,2,1]); break;
            case 'd': morse.push([2,1,1]); break;
            case 'e': morse.push([1]); break;
            case 'f': morse.push([1,1,2,1]); break;
            case 'g': morse.push([2,2,1]); break;
            case 'h': morse.push([1,1,1,1]); break;
            case 'i': morse.push([1,1]); break;
            case 'j': morse.push([1,2,2,2]); break;
            case 'k': morse.push([2,1,2]); break;
            case 'l': morse.push([1,2,1,1]); break;
            case 'm': morse.push([2,2]); break;
            case 'n': morse.push([2,1]); break;
            case 'o': morse.push([2,2,2]); break;
            case 'p': morse.push([1,2,2,1]); break;
            case 'q': morse.push([2,2,1,2]); break;
            case 'r': morse.push([1,2,1]); break;
            case 's': morse.push([1,1,1]); break;
            case 't': morse.push([2]); break;
            case 'u': morse.push([1,1,2]); break;
            case 'v': morse.push([1,1,1,2]); break;
            case 'w': morse.push([1,2,2]); break;
            case 'x': morse.push([2,1,1,2]); break;
            case 'y': morse.push([2,1,2,2]); break;
            case 'z': morse.push([2,2,1,1]); break;
			default: morse.push([-2]);
		}
    });
    return morse;
}; 

function morseToString(arr) {
	return arr.reduce(function(str, num) {
		return str.concat(numToSym(num));
	}, '');
};

function numToSym(char) {
	switch(char) {
		case  -2: return ' / '; break;
		case -.5: return ''; break;
		case   1: return '.'; break;
		case   2: return '-'; break;
		default: return " " ;
	};
};

function blinkText(text, count) {
	toggle(text[count]);
	
	window.setTimeout(function() {
		
		text.length > ++count ? 
			blinkText(text, count) :
			console.log();
					
	}, Math.abs(text[count] * options.time));
};

function toggle(time) {
	var elem = document.getElementById(options.element);
	
	if (time > 0 && !elem.classList.contains(options.toggle)) {
		elem.classList.add(options.toggle);
	} else {
		elem.classList.remove(options.toggle);
	}
};

function setOpts(userOpts) {    
    for (var opt in options) {
        if (userOpts[opt] != undefined 
            && typeof userOpts[opt] === typeof options[opt]) {
            options[opt] = userOpts[opt];
        }
    }
	options.string = options.string.toLowerCase();
};


function morseToggle(element, userOpts){
    if (typeof arguments[0] != 'string') {
        return; 
    }
	
	options.element = element;
	setOpts(userOpts);
	
    var morse = options.string.convertToMorse().flatten(); 
	var morseString = morseToString(morse);
	blinkText(morse, 0);
};




// Demo

function morse(id) {
	morseToggle(id, {
		toggle: 'toggle',
		string: 'This is a sentence.',
		time: 400
	});
};
