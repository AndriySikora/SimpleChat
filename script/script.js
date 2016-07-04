var element = document.getElementById('button');
element.addEventListener('click', addElement, false);

function addElement(e){
	e.preventDefault();
	var messageEl = document.createElement('div');
	var userNameEl = document.createElement('div');
	var textEl = document.createElement('div');
	userNameEl.className = 'user-name';
	textEl.className = 'message-text';
	messageEl.className = 'message-form';
	var contentMessage = document.getElementById('message').value;
	var contentName = document.getElementById('name').value;
	textEl.innerHTML = contentMessage;
	userNameEl.innerHTML = contentName;
	messageEl.appendChild(userNameEl);
	messageEl.appendChild(textEl);
	var chatEl = document.getElementById('chat');
	chatEl.appendChild(messageEl);
	clearInputs();
}

function clearInputs(){
	document.getElementById('message').value = '';
	document.getElementById('name').value = '';
}

