function lastAnswer(){
	var element = document.getElementById('output');
	if (element.innerHTML === '') {
		return '';
	} else {
	return parseFloat(element.innerHTML);
	}
}

function add(){
	var inputOne = document.getElementById('input_1').value;
	var inputTwo = document.getElementById('input_2').value;
	var sum = parseInt(inputOne) + parseInt(inputTwo);
	var lastOutput = lastAnswer();
	document.getElementById("output").innerHTML = sum;
	document.getElementById('last_answer').innerHTML = lastOutput;
}

function subtract(){
	var inputOne = document.getElementById('input_1').value;
	var inputTwo = document.getElementById('input_2').value;
	var sum = parseInt(inputOne) - parseInt(inputTwo);
	var lastOutput = lastAnswer();
	document.getElementById("output").innerHTML = sum;
	document.getElementById('last_answer').innerHTML = lastOutput;
}

function multiply(){
	var inputOne = document.getElementById('input_1').value;
	var inputTwo = document.getElementById('input_2').value;
	var sum = parseInt(inputOne) * parseInt(inputTwo);
	var lastOutput = lastAnswer();
	document.getElementById("output").innerHTML = sum;
	document.getElementById('last_answer').innerHTML = lastOutput;
}

function divide(){
	var inputOne = document.getElementById('input_1').value;
	var inputTwo = document.getElementById('input_2').value;
	var sum = parseInt(inputOne) / parseInt(inputTwo);
	var lastOutput = lastAnswer();
	document.getElementById("output").innerHTML = sum;
	document.getElementById('last_answer').innerHTML = lastOutput;
}

function expo(){
	var inputOne = document.getElementById('input_1').value;
	var inputTwo = document.getElementById('input_2').value;
	var sum = parseInt(inputOne) ^ parseInt(inputTwo);
	var lastOutput = lastAnswer();
	document.getElementById("output").innerHTML = sum;
	document.getElementById('last_answer').innerHTML = lastOutput;
}

function undo(){
		document.getElementById("output").innerHTML = [];
}

