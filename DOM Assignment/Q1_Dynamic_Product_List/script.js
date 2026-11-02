
const productInput = document.getElementById("productInput");
const addProductButton = document.getElementById("addProduct");
const productList = document.getElementById("productList");

// Add new product
addProductButton.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const listItem = document.createElement("li");

    const productText = document.createElement("span");
    productText.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    listItem.append(productText, editButton, deleteButton);

    productList.appendChild(listItem);

    productInput.value = "";
});

// Save edited product
function saveEdit(listItem) {

    const editInput = listItem.querySelector("input");

    if (editInput) {

        const productText = document.createElement("span");

        productText.textContent =
            editInput.value.trim() || "Unnamed Product";

        editInput.replaceWith(productText);
    }
}

// Event delegation on parent UL
productList.addEventListener("click", function (event) {

    const listItem = event.target.closest("li");

    if (!listItem) return;

    // Delete product
    if (event.target.classList.contains("delete")) {

        listItem.remove();
    }

    // Edit product
    else if (event.target.classList.contains("edit")) {

        const productText = listItem.querySelector("span");

        if (productText) {

            const editInput = document.createElement("input");

            editInput.value = productText.textContent;

            productText.replaceWith(editInput);

            editInput.focus();
        }
    }
});

// Automatically save when clicking outside edited item
document.addEventListener("click", function (event) {

    const editedItems = productList.querySelectorAll("li");

    editedItems.forEach(function (listItem) {

        const editInput = listItem.querySelector("input");

        if (editInput && !listItem.contains(event.target)) {

            saveEdit(listItem);
        }
    });
});
