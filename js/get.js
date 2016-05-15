module.exports = function messages (){
    

  var messages = document.getElementById('GetMessagesButton');
   
function messages(){
        
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
    
}
};