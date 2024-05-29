// Function to fetch users from the API
async function fetchUsers() {
    try {
      const response = await fetch('https://policy-link-rwanda-client-project-with.onrender.com/account/view_all_users/');
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
      const roleCell = document.createElement('td');
      const phoneCell = document.createElement('td');
      const usernameCell = document.createElement('td');
  
      nameCell.textContent = `${user.firstname} ${user.lastname}`;
      emailCell.textContent = `${user.email}`;
      roleCell.textContent = `${user.role}`;
      phoneCell.textContent = `${user.phone}`;
      usernameCell.textContent = `${user.username}`;
  
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(phoneCell);
      row.appendChild(roleCell);
      row.appendChild(usernameCell);
  
      tableBody.appendChild(row);
    });
  
    const tableContainer = document.getElementById('table-container');
    tableContainer.appendChild(tableBody);
  }
  
  renderUserData();