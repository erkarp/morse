"use strict";

var codex = jQuery.getJSON('./morse.json'),

    sym = {
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

Array.prototype.insertCuts = function(cut) {
	var array = [];
	this.forEach(function(item) {
		array.push(item);
		array.push(cut);
	});
	return array; 
};
Array.prototype.flatten = function() {
	return this.reduce(function(bigArr, curArr) {
		return bigArr.add(curArr);
	}, []);
}

function letterSym(char) {
}; 
function letterTime(char) {
}; 

function encode(text, fn, start) {
	if (typeof text == 'string') {
		text = text.split('');
	}
	
	return text.reduce(function(result, char) {
		return result.concat(fn(char));
	}, start);	
}

String.prototype.encode = function() {
	return encode(this, function(x) {
		return letterSym(x) + letterSym();
	}, '');
};
String.prototype.encodeTime = function() {
	return encode(this, function(x) {
		console.log(letterTime(x).concat([time.cut]));
		return letterTime(x).insertCuts(time.cut);
	}, []);
};

function transcodeChar(char, code, transCode) {
	for (var key in code) {
		if (char == code[key]) {
			return transCode[key];
		}
	}
}

String.prototype.transcode = function() {
	return encode(this, function(x) {
		return [transcodeChar(x, sym, time)].concat([time.cut]);
	}, []);
};
Array.prototype.transcode = function() {
	return encode(this, function(x) {
		return transcodeChar(x, time, sym);
	}, '');
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
		console.log("str to array", str.transcode());
		console.log("morse to str", morse.transcode());
    };
}( jQuery ));

//https://github.com/mcwhittemore/morse-beep