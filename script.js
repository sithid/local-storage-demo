const inputText = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const saveBtn = document.getElementById("save-button");
const clearBtn = document.getElementById("clear-button");

window.addEventListener("DOMContentLoaded", () => {
  loadItems();
});

saveBtn.addEventListener("click", () => {
  
  const text = inputText.value.trim();

  if (text) {
    saveItem(text);
    inputText.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  itemList.innerHTML = "";
});


function saveItem(text) {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
  loadItems();
}

function loadItems() {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  itemList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
} 