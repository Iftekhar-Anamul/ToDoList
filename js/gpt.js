var todoList = document.querySelector(".todo-list");
var inputBox = document.querySelector(".todo-input");
var date = document.querySelector("#date");
var pendingTask = document.querySelector("#pending-task");
var inputForm = document.querySelector("form");

var cart = [];

inputForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const inputValue = inputBox.value;

    if (inputValue === "") {
        alert("You can't submit an empty value, please enter a valid value.");
    } else {
        // Add the new todo item to the list
        todoList.innerHTML += `
        <div class="todo">
            <p class="todo-item">
                <span><i class="fas fa-bars"></i></span> 
                ${inputValue}
            </p>
            <div class="buttons">
                <button class="check">
                    <i class="fas fa-check"></i>
                </button>
                <button class="trash">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        `;

        // Push the new task into the cart
        cart.push(inputValue);

        // Update the pending tasks count
        cartLnth = cart.length;
        pendingTask.innerText = cartLnth;

        // Clear the input box
        inputBox.value = "";

        // Add event listener to the trash button after the todo item is added to the DOM
        const trashButtons = document.querySelectorAll(".trash");
        trashButtons.forEach((button) => {
            button.addEventListener("click", function(e) {
                const todoItem = e.target.closest('.todo');
                todoItem.remove();  // Remove the todo item
                cart = cart.filter(task => task !== inputValue);  // Update cart
                pendingTask.innerText = cart.length;  // Update the count of pending tasks
            });
        });
    };
});
