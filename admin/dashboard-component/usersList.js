// Function to fetch users from the API
async function fetchUsers() {
  try {
    const response = await fetch('https://policy-link-rwanda-client-project-with.onrender.com/account/view_all_users/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const users = await response.json();
    console.log('Fetched users:', users); // Debugging line
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return []; // Return an empty array on error
  }
}

// Function to delete a user
async function deleteUser(userId) {
  try {
    const response = await fetch(`https://policy-link-rwanda-client-project-with.onrender.com/account/delete_user/${userId}/`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('User deleted:', userId); // Debugging line
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
}

// Function to create a table row for a user
function createUserRow(user) {
  const row = document.createElement('tr');

  const titleCell = document.createElement('td');
  titleCell.classList.add('title');
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('candidate-list-details');
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('candidate-list-info');
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('candidate-list-title');
  const nameLink = document.createElement('a');
  nameLink.href = '#';
  nameLink.textContent = `${user.firstname} ${user.lastname}`;
  const h5 = document.createElement('h5');
  h5.classList.add('mb-0');
  h5.appendChild(nameLink);
  titleDiv.appendChild(h5);
  infoDiv.appendChild(titleDiv);
  detailsDiv.appendChild(infoDiv);
  titleCell.appendChild(detailsDiv);

  const idCell = document.createElement('td');
  idCell.classList.add('text-center');
  idCell.textContent = user.id;

  const firstNameCell = document.createElement('td');
  firstNameCell.classList.add('text-center');
  firstNameCell.textContent = user.firstname;

  const lastNameCell = document.createElement('td');
  lastNameCell.classList.add('text-center');
  lastNameCell.textContent = user.lastname;

  const emailCell = document.createElement('td');
  emailCell.classList.add('text-center');
  emailCell.textContent = user.email;

  const usernameCell = document.createElement('td');
  usernameCell.classList.add('text-center');
  usernameCell.textContent = user.username;

  const phoneCell = document.createElement('td');
  phoneCell.classList.add('text-center');
  phoneCell.textContent = user.phone;

  const roleCell = document.createElement('td');
  roleCell.classList.add('text-center');
  roleCell.textContent = user.role;

  const actionCell = document.createElement('td');
  actionCell.classList.add('action', 'text-right');
  const actionUl = document.createElement('ul');
  actionUl.classList.add('list-unstyled', 'mb-0', 'd-flex', 'justify-content-end');

  const createActionItem = (className, title, iconClass, clickHandler) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.classList.add(className);
    link.setAttribute('data-toggle', 'tooltip');
    link.setAttribute('title', title);
    const icon = document.createElement('i');
    icon.classList.add(...iconClass.split(' '));
    link.appendChild(icon);
    link.addEventListener('click', (event) => {
      event.preventDefault();
      clickHandler();
    });
    li.appendChild(link);
    return li;
  };

  actionUl.appendChild(createActionItem('text-primary', 'View', 'far fa-eye', () => {
    // View action handler
  }));
  actionUl.appendChild(createActionItem('text-info', 'Edit', 'fas fa-pencil-alt', () => {
    // Edit action handler
  }));
  actionUl.appendChild(createActionItem('text-danger', 'Delete', 'far fa-trash-alt', async () => {
    const confirmed = confirm(`Are you sure you want to delete ${user.firstname} ${user.lastname}?`);
    if (confirmed) {
      const success = await deleteUser(user.id);
      if (success) {
        row.remove();
      } else {
        alert('Failed to delete user. Please try again.');
      }
    }
  }));
  actionCell.appendChild(actionUl);

  row.appendChild(titleCell);
  row.appendChild(idCell);
  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(emailCell);
  row.appendChild(usernameCell);
  row.appendChild(phoneCell);
  row.appendChild(roleCell);
  row.appendChild(actionCell);

  return row;
}

// Function to render user data in the table
async function renderUserData() {
  const userData = await fetchUsers();
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = '';

  userData.forEach(user => {
    const row = createUserRow(user);
    tableBody.appendChild(row);
  });
}

// Ensure DOM is loaded before running script
document.addEventListener('DOMContentLoaded', renderUserData);
