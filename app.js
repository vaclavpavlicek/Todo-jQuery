$(function() {
	var input = $('#new-todo-input');
	var button = $('#new-todo-button');
	var list = $('#todo-list');

	button.click(function() {
		var todo = input.val();
		list.append("<li><input type='checkbox'>" + todo + "</li>");
		input.val("");
	});
});