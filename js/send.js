function send(){
    
}
module.exports = function(){

function sending(){
    
}  
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
};

