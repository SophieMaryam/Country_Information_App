var fs = require('fs');
var obj; // you have this if you have a variable = something else. This way obj has a place to store data! 


function name(filename, callbackFunction) { // you need to have two parameters in the function 
	fs.readFile(filename, 'utf8', function(err, data) {
			//it needs to work with any file so just write the parameter "any  file"
	if (err) {
	 	throw err;
	} 
	
	var obj = JSON.parse(data); // this is the parsing of it parse the JSON
	callbackFunction(obj); //you need to call the callbackFunction
	// and then pass the parsed JSON to it 
	})
	//you need to read the file first and parse it
}




module.exports = {
	name:name,

}
// you need to export your files