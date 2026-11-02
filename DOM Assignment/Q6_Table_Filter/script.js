
const searchInput = document.getElementById("searchInput");

const studentTable = document.getElementById("studentTable");

const noResults = document.getElementById("noResults");

const studentRows = studentTable.querySelectorAll("tr");

// Filter students while typing
searchInput.addEventListener("input", function () {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    let visibleRows = 0;

    studentRows.forEach(function (row) {

        const studentData = row.textContent.toLowerCase();

        // Check whether row matches search
        if (studentData.includes(searchValue)) {

            row.style.display = "";

            visibleRows++;
        }

        else {

            row.style.display = "none";
        }
    });

    // Display message when no results are found
    noResults.hidden = visibleRows !== 0;
});
