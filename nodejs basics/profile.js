const https = require('https')
const http = require('http')
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

//print error fucntion
function printerror(error) {
    console.error(error.message)
}

function printmessage(username, badgecount, points) {
    const message = `${username} has ${badgecount} total badges and ${points} in javascript`;
    console.log(message);
}

function get(username) {

//printmessage('shamim',100,4511)
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, Response => {
            //console.log (Response.statusCode)
            //console.dir(Response)
            if (Response.statusCode === 200) {//Read the data
                let body = "";
                Response.on('data', data => {
                    //console.log('data:',data);
                    body += data.toString();
                });

                Response.on('end', () => {
                    try {
                        //parse the data
                        const profile = JSON.parse(body)
                        //console.dir(profile)
                        //console.log(body)
                        //console.log(typeof(body))
                        printmessage(username, profile.badges.length, profile.points.JavaScript)
                    } catch (e) {
                        printerror(e)
                    }
                });
            } else {
                const message = `there was an error getting the profile for ${username} ${http.STATUS_CODES[Response.statusCode]}`
                const statuscodeerror = new Error(message)
                printerror(statuscodeerror)
            }

        });

        request.on('error', error => console.error(`problem with the request: ${error.message}`));
    } catch (error) {
        printerror(error)
    }
}

module.exports.get = get