//exporting the path '"export PATH=${PATH}:/home/shamim/Downloads/node-v8.11.3-linux-x64/bin"'
const https = require('https')
//const username = "chalkers"

console.log("hello world")
console.error("opps something went wrong");
console.dir({
    name: "Shamim",
    age: 22
});

//there are two kinds of events
//user events (the callback on a click event caused by the user)
//system events (the callback when a timeout occurs)

function printmessage(username, badgecount, points) {
    const message = `${username} has ${badgecount} total badges and ${points} in javascript`;
    console.log(message);
}

function getprofile(username){

//printmessage('shamim',100,4511)

const request = https.get(`https://teamtreehouse.com/${username}.json`, Response => {
    //console.log (Response.statusCode)
    //console.dir(Response)

    //Read the data
    let body = "";
    Response.on('data', data => {
        //console.log('data:',data);
        body += data.toString();
    });

    Response.on('end', () => {
        //parse the data
        const profile = JSON.parse(body)
        //console.dir(profile)
        //console.log(body)
        //console.log(typeof(body))
        printmessage(username,profile.badges.length,profile.points.JavaScript)
    });
});

}
//const users = process.argv.slice(2)
//const users = ["alenaholligan","chalkers","james"]

// users.forEach(username => {
//     getprofile(username);
// });

//users.forEach(getprofile)