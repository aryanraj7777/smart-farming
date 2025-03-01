// script.js

// Function to Filter Crops Based on Search Input
function filterCrops() {
    let input = document.getElementById("searchBar").value.toUpperCase();
    let table = document.getElementById("cropTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0]; // Crop name column
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toUpperCase().indexOf(input) > -1 ? "" : "none";
        }
    }
}

