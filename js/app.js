

var todoList = document.querySelector(".todo-list");
var inputBox = document.querySelector(".todo-input");
var date = document.querySelector("#date");
var pendingTask = document.querySelector("#pending-task");
var check = document.querySelectorAll(".check");
// var trash = document.querySelectorAll(".trash");

var inputForm = document.querySelector("form");

// var result;

var cart = [];


// console.log(checked);



inputForm.addEventListener("submit", function (event) {

    event.preventDefault(); 

  
    // console.log(event);
    // var inputValue =  event.value;

    // console.log(inputValue);


    // const inputValue = document.querySelector(".todo-input").value;

    const inputValue = inputBox.value;

    if (inputValue === "") {
        alert("you can't submit a empty value, please enter a valid anything");
    } else {

        // var cart = [];

        todoList.innerHTML += `
        <div class="todo">
                    <p class="todo-item">
                        <span><i class="fas fa-bars"></i></span> 
                        ${inputValue}
                    </p>
                    <div class="butons">
                        <button class="check">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="trash">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
    `


    
    cart.push(inputValue);

    cartLnth = cart.length;

    pendingTask.innerText = cartLnth;
    
    // console.log(cart);

    // console.log(cart.length);



    inputBox.value = "";

    }


    // console.log(inputValue);

   

    // inputForm.target.value = "";
    // inputBox.value = "";




    // trash.forEach((button) => {
    //     button.addEventListener("click", function(e) {
    //         console.log(e);
    //         console.log("you clicked trash");
    //     });
    // });
    


        var trash = document.querySelectorAll(".trash");


        // const trashButtons = document.querySelectorAll(".trash");
        trash.forEach((button) => {
            button.addEventListener("click", function(e) {

                const todoItem = e.target.closest('.todo');
                todoItem.remove();  // Remove the todo item
                cart = cart.filter(task => task !== inputValue);  // Update cart
                pendingTask.innerText = cart.length;  // Update the count of pending tasks
            });
        });


});



// function deleteTask () {
//     checked.addEventListener("click", function(e) {
//         console.log("you clicked delete button/ icon");
//         console.log(e);
//     });
// };



// checked.addEventListener("click", function(e) {
//     console.log(e);
//     console.log("you clicked delete button/ icon");
// });

// trash.addEventListener("click", function(e) {
//     console.log(e);
//     console.log("you clicked Trash button or icon");
// });

// trash.forEach((button) => {
//     button.addEventListener("click", function(e) {
//         console.log(e);
//         console.log("you clicked trash");
//     });
// });

