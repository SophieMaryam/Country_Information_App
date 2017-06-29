var jsonfilereader = require("./json-file-reader");
// you need to import your other page 

jsonfilereader.country("countries.json", function (obj) { // executes this function with the object which is the parse data
	// You need this so that the rest of the function knows what "obj" is
	// The jsonfilereader.country redirects to the other page and imports the function
	for(var i = 0; i < obj.length; i++) {
		if(obj[i].name === process.argv[2]) { // number 2 because node and the filename are part of the array
			console.log("Country: " + obj[i].name + "\n" + " Top Level Domain: " + obj[i].topLevelDomain);
		}
	}
});

	//first parameter is the file that you want to read
	// second parameter is a callback function so it has so no name