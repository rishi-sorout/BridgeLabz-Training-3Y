
const gallery = document.getElementById("gallery");

const modal = document.getElementById("modal");

const modalContent = document.getElementById("modalContent");

const previewImage = document.getElementById("previewImage");

const closeModal = document.getElementById("closeModal");

// Open modal when an image is clicked
gallery.addEventListener("click", function (event) {

    if (event.target.tagName === "IMG") {

        previewImage.src = event.target.src;

        modal.style.display = "flex";
    }
});

// Prevent closing when clicking inside modal
modalContent.addEventListener("click", function (event) {

    event.stopPropagation();
});

// Close modal when clicking outside
modal.addEventListener("click", function () {

    modal.style.display = "none";
});

// Close modal using close button
closeModal.addEventListener("click", function () {

    modal.style.display = "none";
});
