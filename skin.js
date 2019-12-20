
var fs = require("fs-extra");
const dotenv = require('dotenv');
dotenv.config();

/*
if (process.env.NODE_ENV && process.env.NODE_ENV != 'production') {
    const envConfig = dotenv.parse(fs.readFileSync('.env.' + process.env.NODE_ENV.trim()))
    for (const k in envConfig) {
      process.env[k] = envConfig[k]
    }
}
*/

var source = 'skins/' + (process.env.SKIN || 'reserve').trim()
var destination = 'public'
 
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});

