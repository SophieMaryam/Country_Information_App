// Create a Node.js application that does the following:
// Takes in one parameter from the command line, the name of a country. 
	// If you console.log(prcess.argv) --> it will print the value of whatever is in the command line
		// node [file name].js [argument]
		// The whole line is an array so "node" is 0
		// Command line is capital sensitive! 
		// SO if you write process.argv[1]

// Reads and parses the `countries.json` file.

var fs = require('fs');
var obj;

fs.readFile("countries.json", 'utf8', function(err, data) {
		//converts everything from binary and binary to words 
	if (err) {
	 	throw err;
	} // you always need an error part
	// console.log(data)
	
	var obj = JSON.parse(data); 
	// create a variable so you can write the var name instead of JSON.parse
	// 	// parsing loads the JSON file correctly
	// the JSON.parse method parases a JSON string
	
	for(var i = 0; i < obj.length; i++) {
		if(obj[i].name === process.argv[2]) { // number 2 because node and the filename are part of the array
			console.log("Country: " + obj[i].name + "\n" + " Top Level Domain: " + obj[i].topLevelDomain);
		}
	}

		});

// console.log(process.argv);
// process.argv is just the name for writing the argument in the command prompt
