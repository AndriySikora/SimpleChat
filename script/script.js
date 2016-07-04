var element = document.getElementById('button');
element.addEventListener('click', addElement, false);

function addElement(){
	var newDiv = document.createElement('div');
	var newDiv1 = document.createElement('div');
	newDiv.className = 'chatBox';
	newDiv1.className = 'chatBox';
	var divContentMessage = document.getElementById('inputMessage').value;
	var divContentName = document.getElementById('inputName').value;
	newDiv.innerHTML = divContentMessage;
	newDiv1.innerHTML = divContentName;
	var myDiv = document.getElementById('chat');
	myDiv.appendChild(newDiv1);
	myDiv.appendChild(newDiv);
}
