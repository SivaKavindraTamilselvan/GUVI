document.getElementById("submitBtn").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const food = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value).join(", ");
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    if (!gender || food.split(", ").length < 2) {
      alert("Please select at least 2 food options and a gender.");
      return;
    }
  
    const tableBody = document.getElementById("tableBody");
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${email}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${food}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;
  
    document.getElementById("userForm").reset();
  });
  