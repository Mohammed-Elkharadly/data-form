document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("table-body");

  async function readAndPopulateTable() {
    try {
      let response = await fetch("./table.json");
      let data = await response.json();
      for (let i = 0; i < data.length; i++) {
        let row = `
        <tr>
          <td>${data[i].age}</td>
          <td>${data[i].name}</td>
          <td>${data[i].id}</td>
        </tr>`;
        tableBody.innerHTML += row;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  readAndPopulateTable();
});

// out from the table page
const outBtn = document.getElementById("out-btn");

outBtn.addEventListener("click", function () {
  window.localStorage.removeItem("email");
  window.localStorage.removeItem("password");
  window.location.href = "./index.html";
});




