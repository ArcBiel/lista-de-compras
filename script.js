// script.js
document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("itemInput");
    const addItemButton = document.getElementById("addItemButton");
    const shoppingList = document.getElementById("shoppingList");
  
    // Adicionar item à lista
    addItemButton.addEventListener("click", () => {
      const itemText = itemInput.value.trim();
      if (itemText === "") {
        alert("Por favor, insira um item.");
        return;
      }
  
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remover";
      deleteButton.addEventListener("click", () => {
        shoppingList.removeChild(listItem);
      });
  
      listItem.appendChild(deleteButton);
      shoppingList.appendChild(listItem);
  
      itemInput.value = "";
    });
  
    // Permitir Enter para adicionar item
    itemInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addItemButton.click();
      }
    });
  });