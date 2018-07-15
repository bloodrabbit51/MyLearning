//exporting the path '"export PATH=${PATH}:/home/shamim/Downloads/node-v8.11.3-linux-x64/bin"'
const profile = require('./profile.js')

//const users = process.argv.slice(2)
const users = ["alenaholligan", "chalkers", "james", "dexter"];

// users.forEach(username => {
//     getprofile(username);
// });

users.forEach(profile.get)