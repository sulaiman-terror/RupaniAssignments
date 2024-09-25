const form = document.getElementById('myForm');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = {};
  
  for (const [key, value] of formData) {
    data[key] = value;
  }
  
  const tableHTML = `
    <table>
      <tr>
        <th>Name</th>
        <td>${data.name}</td>
      </tr>
      <tr>
        <th>Password</th>
        <td>${data.password}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>${data.gender}</td>
      </tr>
      <tr>
        <th>Hobbies</th>
        <td>${data.hobbies}</td>
      </tr>
      <tr>
        <th>Education</th>
        <td>${data.education}</td>
      </tr>
    </table>
  `;
  
  outputDiv.innerHTML = tableHTML;
});