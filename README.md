#Morse Toggle 

Toggles a given class on a selected element in the Morse code of a message. The message can be supplied by the user, otherwise it defaults to SOS. Written in vanilla Javascript. 


##Usage for jQuery version

1. Add a script tag calling morseToggle.js before the closing body tag. 

2. Initiate the blinker with a script tag under the morseToggle.js call: 

	`$(".my_class").morseToggle();
	
	
3. Or  define the options object as a second argument: 

	`$(".my_class").morseToggle({
		toggle: toggle_class,
		string: my_string, 
		time: my_time
	`");	


##Usage for plain JS version

1. Add a script tag calling morseToggle-plain.js before the closing body tag. 

2. Initiate the blinker with a script tag under the morseToggle-plain.js call: 

	`morseToggle(my_id);
	
3. Or define the options object as a second argument: 
	
	`morseToggle("my_id", {
		toggle: toggle_class,
		string: my_string, 
		time: my_time
	`});
	
	
	
	
##Options

There are currently three options that can be included in the argument object: toggle, string, and time. 


###toggle 

The class (as a string) to be toggled on and off in the Morse code translation of the given string. 
Defaults to "active" if not defined. 


###string 

The string to be translated into Morse code. 
Defaluts to "SOS" if not defined. 


###time 

The length of one "dot" in milliseconds. 
Defaults to 250 if not defined. 



##Notes

Smaller break times can result in asynchronicity if many classes are being toggled by the same call. 
	