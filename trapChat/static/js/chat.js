window.onload = fuction(){

	var messages=[]; //init the messages array 

	var socket = io.connect('http://localhost:3700');
	var field =  document.getElementById("field");
	var sendButton = document.getElementById("send");
	var content =  document.getElementById("content")

	socket.on('message', function(data){
		if(data.message){
			messages.push(data.message);
			var html = '';
			for(var i=0; i<messages.length; i++){
				html += messages[i] + '<br />';
			}
			conent.innerHTML = html;
		} else {
			console.log('THere is a problem', data);
		}
	});

	sendButton.onclick =  function(){
		var text = field.value;
		sock              et.emit('send', {message: text});
	};

};