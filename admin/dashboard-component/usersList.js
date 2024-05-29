// Function to fetch users from the API
async function fetchUsers() {
    try {
      const response = await fetch('https://example.com/users');
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
  // Function to render user data in the table
  async function renderUserData() {
    const userData = await fetchUsers();
    const tableBody = document.createElement('tbody');
  
    userData.forEach(user => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const emailCell = document.createElement('td');
  
      nameCell.textContent = `${user.firstname} ${user.lastname}`;
      emailCell.textContent = user.email;
  
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      tableBody.appendChild(row);
    });
  
    const tableContainer = document.getElementById('table-container');
    tableContainer.appendChild(tableBody);
  }
  
  renderUserData();