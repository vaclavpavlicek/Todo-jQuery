$(function() {
	var input = $('#new-todo-input');
	var button = $('#new-todo-button');
	var list = $('#todo-list');

	button.click(function() {
		var todo = input.val();
		list.append("<li>" + todo + "</li>");
		input.val("");
	});
});