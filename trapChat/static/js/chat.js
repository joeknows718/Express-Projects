window.onload = function(){

	var messages=[]; //init the messages array 

	var socket = io.connect('http://localhost:3000');
	var field =  document.getElementById("field");
	var sendButton = document.getElementById("send");
	var content =  document.getElementById("content");
	var name = document.getElementById("name");

	socket.on('message', function(data){
		if(data.message && data.username){
			messages.push(data);
			var html = '';
			for(var i=0; i<messages.length; i++){
				html += messages[i].username +": " + messages[i].message + '<br />';
			}
			content.innerHTML = html;
			content.scrollTop = content.scrollHeight;
			console.log(messages)
		} else {
			console.log('There is a problem', data);
		}
	});

	sendButton.onclick =  sendMessage = function(){
		if (name.value == ""){
			alert("Please type your name!");
		} else {
			var text = field.value;
			var user = name.value;
			socket.emit('send', {message: text, username: user});
			field.value = ""
		}
	};
};