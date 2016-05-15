// var char = require('chai'); // importing things with npm
// var update = require('./get'); //importing local modules
// var send = require ('./send');  // importing local modules 
//
//module.exports = function updateMessages(){
//
// var gulpfile.js
// gulp.task('html, function() {
// });


 //gulpfiles
  //add a gulp plugin 
  //find it online (on npm)
  //npm install plugin
  //require it
  //add it to the right pipelines
  
  
 
window.addEventListener('load', function(){
    console.log('Welcome To The Better Tinder');
    messages.addEventListener('click', function(){
    
    var messages = document.getElementById('GetMessagesButton');
   
    messages.addEventListener('click', function(){
    
    var request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    
    request.onload = function () {
    var data = JSON.parse(request.responseText);
    console.log(data.count); // this has a value now!
// Actually make the request.
    if (request.readyState == 4 && request.status == 200) {
     document.getElementById("textBlock").innerHTML = request .responseText;
  
        
    //var parent = document.getElementById('textBlock');
       // var parent = document.getElementById('chatLog');
       // parent.innerHTML = '';
    //for (var i = 0; i < data.length; i++){
        //var element = document.createElement('li');
        //element.textContent = data[i].user + ': ' +data[i].message;
        //element.classList.add('whatever-class-name');
       // element.setAttribute('id', ' message-' + data[i].id)
        
        //parent.appendChild(element);
    
    }
    };
    request.send();
    
});
    //Send function add event listener for click and get the elId for the //send button
    var send = document.getElementById('sendButton');
        send.addEventListener('click', function(){
    //id for userName and Message boxes for the values 
    var name = document.getElementById('userName').textContent;
    var messages2 = document.getElementById('enterMessage').textContent;
    //sends the request information to the server via the post function
    var request2 = new XMLHttpRequest();
    request2.open('POST', 'http://chat.queencityiron.com/messages');
    request2.send(JSON.stringify({
        //What information it sends to teh server 
       name: document.getElementById('userName').value,
       message: document.getElementById('enterMessage').value,
        }));

// Establish where we want to get information from. This is a GET request.

// Establish what we want to do when we get it.
    // Do something with it.




// Establish where we want to get information from. This is a POST request.

// We don't need to have an `onload` function because the response isn't important to us in this case.
// Actually make the request. With a POST request, you often need to specify what information you want the server to do
// something with. In this case, you need to specify a `name` and a `message`.
// JSON.stringify is the opposite of JSON.parse.
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

        });
    
});
//for (var i = 0; i < data.results.length; i++){
  //  console.log(data.results[i].title + ' is ' + //data.results[i].price);
//}
// Establish where we want to get information from. This is a GET request.

// Establish what we want to do when we get it.
    // Do something with it.




// Establish where we want to get information from. This is a POST request.

// We don't need to have an `onload` function because the response isn't important to us in this case.
// Actually make the request. With a POST request, you often need to specify what information you want the server to do
// something with. In this case, you need to specify a `name` and a `message`.
// JSON.stringify is the opposite of JSON.parse.
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

       
    

//for (var i = 0; i < data.results.length; i++){
  //  console.log(data.results[i].title + ' is ' + //data.results[i].price);
//}
 




