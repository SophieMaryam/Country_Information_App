var fs = require('fs');
var obj; // you have this if you have a variable = something else. This way obj has a place to store data! 


function country(filename, callbackFunction) { // you need to have two parameters in the function 
	// you need to wrap the reading and parsing in a function with two parameters
	fs.readFile(filename, 'utf8', function(err, data) {
			//it needs to work with any file so just write the parameter "any  file"
	if (err) {
	 	throw err;
	} 
	
	var obj = JSON.parse(data); // this is the parsing of it parse the JSON
	//you always need to have a var [name] = to the data 
	callbackFunction(obj); //you need to call the callbackFunction
	// and then pass the parsed JSON to it because that is the data 
	})
	//you need to read the file first and parse it
}




module.exports = {
	country:country,

}
// you need to export your files