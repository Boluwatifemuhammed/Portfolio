let ntBtn = document.querySelector(".new-task-btn")
let modal = document.querySelector(".modal")
let addTaskBtn = document.querySelector(".taskbtn")
let todoList = document.querySelector(".todo-list")
let userList = document.createElement("ol")
let todoInput = document.querySelector(".taskinput")
let editCont = document.querySelector(".edit-cont")
let editInput = document.querySelector(".edit-input")
let doneEditing = document.querySelector(".edit-btn")
let firstIcon = document.querySelector(".object-one")
let secIcon = document.querySelector(".object-two")
let thirdIcon = document.querySelector(".object-three")
let CancelBtn = document.querySelector(".Cancel")
let localDb = [];

ntBtn.addEventListener("click", () => {
    modal.style.display = "block"
    ntBtn.style.display = "none"
    firstIcon.style.opacity = "1"
    secIcon.style.opacity = "1"
    thirdIcon.style.opacity = "1"

})

function persistState() {
    let getItem = localStorage.getItem(localDb)
    if (getItem === null) {
        localStorage.setItem("task", JSON.stringify(localDb))
    } else {
        JSON.parse(getItem)
    }
}

persistState()

CancelBtn.addEventListener("click", () => {
    modal.style.display = "none"
    ntBtn.style.display = "block"

})





function addTask() {





    if (todoInput.value !== " ") {
        userList.style.display = "block"



    }
    else {
        alert("You must write Something")

        userList.style.display = "none"

        return true;

    }




    todoList.appendChild(userList)
    let userInput = todoInput.value;
    let list = document.createElement("li")
    list.classList.add("userslist");
    list.textContent = userInput
    setItem();
    userList.appendChild(list);
    todoInput.value = " ";
    modal.style.display = "none"
    ntBtn.style.display = "block"
    firstIcon.style.opacity = "0"
    secIcon.style.opacity = "0"
    thirdIcon.style.opacity = "0"
    let delBtn = document.createElement("i");
    let editBtn = document.createElement("i");
    delBtn.classList.add(`fa`, `fa-trash`);
    editBtn.classList.add(`fa`, `fa-edit`);
    list.appendChild(delBtn)
    list.appendChild(editBtn)

    delBtn.addEventListener("click", () => {
        list.remove();
    })


    const openEditModal = () => {
        editCont.style.display = "block";
    };

    let closeEditModal = () => {
        editCont.style.display = "none";

    };

    const handleEdit = (index) => {
        editInput.value = userEditList[index].textContent;

        const handleEditModalBtnClick = () => {
            userEditList[index].textContent = editInput.value;



            const newDelBtn = delBtn.cloneNode(true);
            const newEditBtn = editBtn.cloneNode(true);


            userEditList[index].appendChild(newDelBtn);
            userEditList[index].appendChild(newEditBtn);          

            editCont.style.display = "none";

            newEditBtn.addEventListener(openEditModal)



            doneEditing.removeEventListener("click", handleEditModalBtnClick);
        };


        doneEditing.addEventListener("click", handleEditModalBtnClick);
    };

    const userEditList = document.querySelectorAll(".userslist");

    editBtn.addEventListener("click", openEditModal);

    console.log("clicked");

    userEditList.forEach((item, index) => {
        item.addEventListener("click", () => {
            handleEdit(index);
        });
    });


    //   for (let i = 0; i < allUserTask.length; i++) {
    //     allUserTask[i].addEventListener("click", () => {
    //       editEvent(i);
    //     });
    //   }



}

function setItem() {
    localDb = [...localDb, todoInput.value];
    console.log(todoInput.value);
    localStorage.setItem("task", JSON.stringify(localDb));
    console.log(localStorage);

}


addTaskBtn.addEventListener("click", addTask);