// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  // response.end("It Works!! Path Hit: " + request.url);
  response.end("it works! " + parseUserID(request.url))
}

// TO DO :
// I have to parse out the request.url stuff to identify the $$USER.ID params being sent and the $$SESSION.ID

function parseUserID(requestURLGoesHere) {
  var url_array = requestURLGoesHere.split('=')
  console.log(url_array);

}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
