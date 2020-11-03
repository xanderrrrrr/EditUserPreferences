// Require/import the HTTP module
var http = require("http");
// import axios
var axios = require("axios");

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // do the parseURL elements function
  parseUrlElements(request.url)

  // do the axios call 
  axios
  .get("https://xandercanedo.my.workfront.com/attask/api-unsupported/userpf/search?sessionID=")
  .then(function(response) {
    // if axios successful
    console.log(response.data)
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

  // Send the below string to the client when the user visits the PORT URL
  response.end("it works! " )
}

// TO DO :
// I have to parse out the request.url stuff to identify the $$USER.ID params being sent and the $$SESSION.ID

function parseUrlElements(requestURLGoesHere) {
  var url_array = requestURLGoesHere.split('&')
  console.log(url_array);
  console.log("-------")
  getUserPreferenceAPI(url_array)
}

function getUserPreferenceAPI(urlArrayNotComplete) {
  tempArray = [];
  for (i = 0; i < urlArrayNotComplete.length; i++) {
    str = urlArrayNotComplete[i]
    indexOfEquals = str.search("=")
    var niceString = str.slice(indexOfEquals+1)
    tempArray.push(niceString)

  }

  console.log(tempArray)


}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
