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

function toggle(time) {
	var elem = options.element,
		togg = options.toggle;
	
	if (time > 0 && $(elem).addClass(togg) {
		elem.classList.add(options.toggle);
	} else {
		elem.classList.remove(options.toggle);
	}
};

function morseToggle(element, userOpts){
    if (typeof arguments[0] != 'string') {
        return; 
    }
	
	options.element = element;
	setOpts(userOpts);
	
    var morse = options.string.convertToMorse().flatten(); 
	var morseString = morseToString(morse);
	console.log(morse, morseString);
	blinkText(morse, 0);
};

(function($) {
    $.fn.morseLaunch = function(userOpts) {
		
        var options = $.extend({
			toggle: "active",
			string: "SOS", 
			time: 250
        }, userOpts);
 
		var morse = options.string.convertToMorse().flatten();
		var morseString = morseToString(morse);

		function blinkText(elem, count) {
			elem.toggleClass(options.toggle);

			window.setTimeout(function() {

				morse.length > ++count ? 
					blinkText(elem, count) :
					console.log("end");

			}, Math.abs(morse[count] * options.time));
		};

		this.each(function(elem) {
			blinkText(elem, 0);
		});
		
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    };
}( jQuery ));




// Demo

function morse(class) {
	$(class).morseToggle({
		toggle: 'toggle',
		string: "Toggling with jQuery",
		time: 400
	});
};