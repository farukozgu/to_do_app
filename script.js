const inputBox = document.getElementById("textInput");
const listBox = document.getElementById("listBox");

function addTask() {
  if (inputBox.value === "") {
    document.getElementById("alert").textContent = "You must write something";

    setTimeout(function () {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    let img = document.createElement("img");
    img.src = "./assets/bin.svg";
    img.alt = "Delete";
    img.classList.add("delete-icon");
    li.appendChild(img);
  }
  inputBox.value = "";
  saveData();
}

listBox.addEventListener("click", function (element) {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("checked");
    saveData();
  } else if (element.target.tagName === "IMG") {
    element.target.parentElement.remove();
    saveData();
  }
});

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
  const listItems = document.querySelectorAll("#listBox li");
  listItems.forEach(function (item) {
    item.remove();
  });
  saveData();
});

function clearAll() {
  clearBtn;
}

function saveData() {
  localStorage.setItem("data", listBox.innerHTML);
}

function showList() {
  listBox.innerHTML = localStorage.getItem("data");
}

showList();
