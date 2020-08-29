
let result;
var stack = new Stack();
function update_result(operation, operand) {
	if(operation == "-"){
		result = Number(result) - Number(operand);
		$("#value").val("");
		stack.push({operation:"-", operand:Number(operand), result:result});
	}
	else if(operation == "+"){
		result = Number(result) + Number(operand);
		$("#value").val("");
		stack.push({operation:"+", operand:Number(operand), result:result});
	}
	else if(operation == "*"){
		result = Number(result) * Number(operand);
		$("#value").val("");
		stack.push({operation:"*", operand:Number(operand), result:result});

	}
	else if(operation == "/"){
		result = Number(result) / Number(operand);
		$("#value").val("");
		stack.push({operation:"/", operand:Number(operand), result:result});
	}
	else{
		// just change the stack top without math opertion after pop
		result = Number(operand);
	}
	$("#result").val(result);
	return result;		
}

function plus() {
	result = $("#result").val();
	var value = $("#value").val();
	update_result("+",value);
}

function minus() {
	result = $("#result").val();
	var value = $("#value").val();
	update_result("-",value);
}
function multi() {
	result = $("#result").val();
	var value = $("#value").val();
	update_result("*",value);
}

function div() {
	result = $("#result").val();
	var value = $("#value").val();
	update_result("/",value);
}

function redo() {
	var last = stack.peek();
	update_result(last.operation,last.operand);
}

function undo() {
	var poped = stack.pop();
	var last = stack.peek();
	update_result('.',last.result);
}