"use strict";

var codex = {
  ' ': ['space'],
  'a': ['dot', 'dash'],
  'b': ['dash', 'dot', 'dot', 'dot'],
  'c': ['dash', 'dot', 'dash', 'dot'],
  'd': ['dash', 'dot', 'dot'],
  'e': ['dot'],
  'f': ['dot', 'dot', 'dash', 'dot'],
  'g': ['dash', 'dash', 'dot'],
  'h': ['dot', 'dot', 'dot', 'dot'],
  'i': ['dot', 'dot'],
  'j': ['dot', 'dash', 'dash', 'dash'],
  'k': ['dash', 'dot', 'dash'],
  'l': ['dot', 'dash', 'dot', 'dot'],
  'm': ['dash', 'dash'],
  'n': ['dash', 'dot'],
  'o': ['dash', 'dash', 'dash'],
  'p': ['dot', 'dash', 'dash', 'dot'],
  'q': ['dash', 'dash', 'dot', 'dash'],
  'r': ['dot', 'dash', 'dot'],
  's': ['dot', 'dot', 'dot'],
  't': ['dash'],
  'u': ['dot', 'dot', 'dash'],
  'v': ['dot', 'dot', 'dot', 'dash'],
  'w': ['dot', 'dash', 'dash'],
  'x': ['dash', 'dot', 'dot', 'dash'],
  'y': ['dash', 'dot', 'dash', 'dash'],
  'z': ['dash', 'dash', 'dot', 'dot'],
  '.': ['stop']
}

var trans = {
      sym: {
    		dot: '.',
    		dash: '_',
    		space: '  ',
    		stop: ' / ',
    		cut: ' '
    	},
    	time: {
    		dot: 1,
    		dash: 2,
    		space: -1.5,
    		stop: -2,
    		cut: -1
      }
	  };

Array.prototype.insertCuts = function(cut) {
	var array = [];
	this.forEach(function(item) {
		array.push(item);
		array.push(cut);
	});
	return array;
};

/* DEPRECIATED
Array.prototype.flatten = function() {
	return this.reduce(function(bigArr, curArr) {
		return bigArr.add(curArr);
	}, []);
}
*/

/// return: sting of symbols or array of times
// param: array of single characters or a string
// param: either 'sym' (for symbols) or 'time' (for times)
// param: seed string or array to be added to and returned

function encode(text, code, seed) {
	if (typeof text === 'string') {
		text = text.split('');
	}

	return text.reduce(function(result, char) {
    var mapped = encodeChar(char, code);

    if (typeof seed === 'string') {
      mapped = mapped.join('');
    }

    mapped = mapped.concat(trans[code].cut);
    return result.concat(mapped);
	}, seed);
}


/// return: an array of symbols or times equating to one character in morse
// param: an array of 'dots' and/or 'dashes' equating to one character (from the codex)
// param: either 'sym' or 'times'

function encodeChar(x, code) {
  return codex[x].map(function(char) {
    return trans[code][char];
  });
}


// this: string to be converted to morse code symbols
// return: flattened string of morse code symbols

String.prototype.encode = function() {
	return encode(this, 'sym', '');
};


// this: tring to be converted into blink times
// return: array of blink times to for blinkText()

String.prototype.encodeTime = function() {
	return encode(this, 'time', []);
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
