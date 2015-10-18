"use strict";

var syms = {
		dot: '.',
		dash: '_',
		space: ' ',
		stop: ' / ',
		cut: ''
	},
	time = {
		dot: 1,
		dash: 2,
		space: -1.5,
		stop: -2,
		cut: -1
	},
	code = {};

function setCode() {
	[syms, time].forEach(function(c) {
		for (var key in c) {
			code[key].sym = syms.key;
		}
	});
};	setCode();

Array.prototype.add = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		this.push(arr[i]);
		this.push(1);
	}
	return this; 
};

Array.prototype.flatten = function() {
	return this.reduce(function(bigArr, curArr) {
		return bigArr.add(curArr);
	}, []);
}

String.prototype.letterSym = function() {
	switch(this) {
		case ' ': return [sym.space]; break;
		case 'a': return [sym.dot,sym.dash]; break;
		case 'b': return [sym.dash,sym.dot,sym.dot,sym.dot]; break;
		case 'c': return [sym.dash,sym.dot,sym.dash,sym.dot]; break;
		case 'd': return [sym.dash,sym.dot,sym.dot]; break;
		case 'e': return [sym.dot]; break;
		case 'f': return [sym.dot,sym.dot,sym.dash,sym.dot]; break;
		case 'g': return [sym.dash,sym.dash,sym.dot]; break;
		case 'h': return [sym.dot,sym.dot,sym.dot,sym.dot]; break;
		case 'i': return [sym.dot,sym.dot]; break;
		case 'j': return [sym.dot,sym.dash,sym.dash,sym.dash]; break;
		case 'k': return [sym.dash,sym.dot,sym.dash]; break;
		case 'l': return [sym.dot,sym.dash,sym.dot,sym.dot]; break;
		case 'm': return [sym.dash,sym.dash]; break;
		case 'n': return [sym.dash,sym.dot]; break;
		case 'o': return [sym.dash,sym.dash,sym.dash]; break;
		case 'p': return [sym.dot,sym.dash,sym.dash,sym.dot]; break;
		case 'q': return [sym.dash,sym.dash,sym.dot,sym.dash]; break;
		case 'r': return [sym.dot,sym.dash,sym.dot]; break;
		case 's': return [sym.dot,sym.dot,sym.dot]; break;
		case 't': return [sym.dash]; break;
		case 'u': return [sym.dot,sym.dot,sym.dash]; break;
		case 'v': return [sym.dot,sym.dot,sym.dot,sym.dash]; break;
		case 'w': return [sym.dot,sym.dash,sym.dash]; break;
		case 'x': return [sym.dash,sym.dot,sym.dot,sym.dash]; break;
		case 'y': return [sym.dash,sym.dot,sym.dash,sym.dash]; break;
		case 'z': return [sym.dash,sym.dash,sym.dot,sym.dot]; break;
		default: return [sym.space];
	}
}; 
String.prototype.letterTime = function() {
	switch(this) {
		case ' ': return time.space; break;
		case 'a': return time.dot + time.dash; break;
		case 'b': return time.dash + time.dot + time.dot + time.dot; break;
		case 'c': return time.dash + time.dot + time.dash + time.dot; break;
		case 'd': return time.dash + time.dot + time.dot; break;
		case 'e': return time.dot; break;
		case 'f': return time.dot + time.dot + time.dash + time.dot; break;
		case 'g': return time.dash + time.dash + time.dot; break;
		case 'h': return time.dot + time.dot + time.dot + time.dot; break;
		case 'i': return time.dot + time.dot; break;
		case 'j': return time.dot + time.dash + time.dash + time.dash; break;
		case 'k': return time.dash + time.dot + time.dash; break;
		case 'l': return time.dot + time.dash + time.dot + time.dot; break;
		case 'm': return time.dash + time.dash; break;
		case 'n': return time.dash + time.dot; break;
		case 'o': return time.dash + time.dash + time.dash; break;
		case 'p': return time.dot + time.dash + time.dash + time.dot; break;
		case 'q': return time.dash + time.dash + time.dot + time.dash; break;
		case 'r': return time.dot + time.dash + time.dot; break;
		case 's': return time.dot + time.dot + time.dot; break;
		case 't': return time.dash; break;
		case 'u': return time.dot + time.dot + time.dash; break;
		case 'v': return time.dot + time.dot + time.dot + time.dash; break;
		case 'w': return time.dot + time.dash + time.dash; break;
		case 'x': return time.dash + time.dot + time.dot + time.dash; break;
		case 'y': return time.dash + time.dot + time.dash + time.dash; break;
		case 'z': return time.dash + time.dash + time.dot + time.dot; break;
		default: return time.space;
	}
}; 

String.prototype.translate = function(time) {
	if (time) {
		var convert = String.letterTime,
			start = [];
	} else {
		var convert = String.letterSym,
			start = '';
	}
	
	return this.reduce(function(result, char) {
		return result.concat(char.covert());
	}, start);
}

Number.prototype.transCode = function() {
	return transcodeChar(this, time, syms);
};
String.prototype.transCode = function() {
	return transcodeChar(this, syms, time);
};

function transcodeChar(char, code, transCode) {
	for (var key in code) {
		if (char == code[key]) {
			return transCode[key];
		}
	}
}


(function($) {
    $.fn.morseToggle = function(userOpts) {
		
		var code = translation.time; 
		
        var options = $.extend({
			toggle: "active",
			string: "SOS", 
			time: 250
        }, userOpts);
 
		var morse = options.string.translate(true).flatten();
		console.log(morse);

		function blinkText(elem, count) {
			elem.toggleClass(options.toggle);

			window.setTimeout(function() {

				morse.length > ++count ? 
					blinkText(elem, count) :
					console.log("end");

			}, Math.abs(morse[count] * options.time));
		};

		this.each(function() {
			blinkText($(this), 0);
		});
    };
}( jQuery ));