function onPageLoaded() {
	const input = document.querySelector("input[type='text']");
	const ul = document.querySelector("ul.todo__list");

	// функция создания пункта списка
	function createToDo() {
		const li = document.createElement("li");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		const span = document.createElement("span");
		const deleteButton = document.createElement("button");
		li.classList.add("todo__list-item", "todo__list-item_position");
		checkbox.classList.add("todo__list-checkbox");
		deleteButton.classList.add("todo__delete");
		const newToDo = input.value;
		span.append(newToDo);

		ul.appendChild(li).append(checkbox, span, deleteButton);
		input.value = "";
	}

	// функция удаления пункта списка

	//вызов функции, создающей пункт списка
	input.addEventListener("keypress", (keyPressed) => {
		const keyEnter = 13;
		if (keyPressed.which == keyEnter) {
			createToDo();
		}
	});
	// вызов функции, удаляющей пункт списка

	// ul.addEventListener("click", onClickTodo);
}

document.addEventListener("DOMContentLoaded", onPageLoaded);