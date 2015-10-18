"use strict";

var sym = {
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
	};

Array.prototype.add = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		this.push(arr[i]);
	}
	return this; 
};
Array.prototype.flatten = function() {
	return this.reduce(function(bigArr, curArr) {
		return bigArr.add(curArr);
	}, []);
}

function letterSym(char) {
	switch(char) {
		case ' ': return sym.space; break;
		case 'a': return sym.dot + sym.dash; break;
		case 'b': return sym.dash + sym.dot + sym.dot + sym.dot; break;
		case 'c': return sym.dash + sym.dot + sym.dash + sym.dot; break;
		case 'd': return sym.dash + sym.dot + sym.dot; break;
		case 'e': return sym.dot; break;
		case 'f': return sym.dot + sym.dot + sym.dash + sym.dot; break;
		case 'g': return sym.dash + sym.dash + sym.dot; break;
		case 'h': return sym.dot + sym.dot + sym.dot + sym.dot; break;
		case 'i': return sym.dot + sym.dot; break;
		case 'j': return sym.dot + sym.dash + sym.dash + sym.dash; break;
		case 'k': return sym.dash + sym.dot + sym.dash; break;
		case 'l': return sym.dot + sym.dash + sym.dot + sym.dot; break;
		case 'm': return sym.dash + sym.dash; break;
		case 'n': return sym.dash + sym.dot; break;
		case 'o': return sym.dash + sym.dash + sym.dash; break;
		case 'p': return sym.dot + sym.dash + sym.dash + sym.dot; break;
		case 'q': return sym.dash + sym.dash + sym.dot + sym.dash; break;
		case 'r': return sym.dot + sym.dash + sym.dot; break;
		case 's': return sym.dot + sym.dot + sym.dot; break;
		case 't': return sym.dash; break;
		case 'u': return sym.dot + sym.dot + sym.dash; break;
		case 'v': return sym.dot + sym.dot + sym.dot + sym.dash; break;
		case 'w': return sym.dot + sym.dash + sym.dash; break;
		case 'x': return sym.dash + sym.dot + sym.dot + sym.dash; break;
		case 'y': return sym.dash + sym.dot + sym.dash + sym.dash; break;
		case 'z': return sym.dash + sym.dash + sym.dot + sym.dot; break;
		case '.': return sym.stop;
		default: return sym.cut;
	}
}; 
function letterTime(char) {
	switch(char) {
		case ' ': return [time.space]; break;
		case 'a': return [time.dot,time.dash]; break;
		case 'b': return [time.dash,time.dot,time.dot,time.dot]; break;
		case 'c': return [time.dash,time.dot,time.dash,time.dot]; break;
		case 'd': return [time.dash,time.dot,time.dot]; break;
		case 'e': return [time.dot]; break;
		case 'f': return [time.dot,time.dot,time.dash,time.dot]; break;
		case 'g': return [time.dash,time.dash,time.dot]; break;
		case 'h': return [time.dot,time.dot,time.dot,time.dot]; break;
		case 'i': return [time.dot,time.dot]; break;
		case 'j': return [time.dot,time.dash,time.dash,time.dash]; break;
		case 'k': return [time.dash,time.dot,time.dash]; break;
		case 'l': return [time.dot,time.dash,time.dot,time.dot]; break;
		case 'm': return [time.dash,time.dash]; break;
		case 'n': return [time.dash,time.dot]; break;
		case 'o': return [time.dash,time.dash,time.dash]; break;
		case 'p': return [time.dot,time.dash,time.dash,time.dot]; break;
		case 'q': return [time.dash,time.dash,time.dot,time.dash]; break;
		case 'r': return [time.dot,time.dash,time.dot]; break;
		case 's': return [time.dot,time.dot,time.dot]; break;
		case 't': return [time.dash]; break;
		case 'u': return [time.dot,time.dot,time.dash]; break;
		case 'v': return [time.dot,time.dot,time.dot,time.dash]; break;
		case 'w': return [time.dot,time.dash,time.dash]; break;
		case 'x': return [time.dash,time.dot,time.dot,time.dash]; break;
		case 'y': return [time.dash,time.dot,time.dash,time.dash]; break;
		case 'z': return [time.dash,time.dash,time.dot,time.dot]; break;
		case '.': return [time.stop]; break;
		default: return [time.cut];
	}
}; 

String.prototype.encode = function() {
	return encode(this, function(x) {
		return letterSym(x) + letterSym();
	}, '');
};
String.prototype.encodeTime = function() {
	return encode(this, function(x) {
		return letterTime(x).concat(letterTime());
	}, []);
};

function encode(str, fn, start) {
	return str.split('').reduce(function(result, char) {
		console.log(char, result);
		return result.concat(fn(char));
	}, start);	
}

function transcodeChar(char, code, transCode) {
	for (var key in code) {
		if (char == code[key]) {
			return transCode[key];
		}
	}
}
Number.prototype.transCodeChar = function() {
	return transcodeChar(this, time, sym);
};
String.prototype.transCodeChar = function() {
	return transcodeChar(this, sym, time);
};
Array.prototype.transCode = function() {
	var start = typeof this[0] === 'number' ? '' : [];
	return this.reduce(function(result, char) {
		console.log(char, result);
		return result.concat(char.transCodeChar());
	}, start);
};



(function($) {
    $.fn.morseToggle = function(userOpts) {
		
        var opts = $.extend({
			toggle: "active",
			string: "SOS", 
			time: 250
        }, userOpts);
 
		var morse = opts.string.toLowerCase().encodeTime();
		console.log(morse);

		function blinkText(elem, count) {
			elem.toggleClass(opts.toggle);

			window.setTimeout(function() {

				if (morse.length > ++count) { 
					blinkText(elem, count);
				}

			}, Math.abs(morse[count] * opts.time));
		};

		this.each(function() {
			blinkText($(this), 0);
		});
		var str = opts.string.toLowerCase().encode();
		console.log(str);
		console.log("str to array", str.split('').transCode());
		console.log("morse to str", morse.transCode());
    };
}( jQuery ));