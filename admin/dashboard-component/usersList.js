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
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';
  
    userData.forEach(user => {
      const row = document.createElement('tr');
  
      const titleCell = document.createElement('td');
      titleCell.classList.add('title');
  
      const thumbDiv = document.createElement('div');
      thumbDiv.classList.add('thumb');
  
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
  
      const viewLi = document.createElement('li');
      const viewLink = document.createElement('a');
      viewLink.href = '#';
      viewLink.classList.add('text-primary');
      viewLink.setAttribute('data-toggle', 'tooltip');
      viewLink.setAttribute('title', 'view');
      const viewIcon = document.createElement('i');
      viewIcon.classList.add('far', 'fa-eye');
      viewLink.appendChild(viewIcon);
      viewLi.appendChild(viewLink);
  
      const editLi = document.createElement('li');
      const editLink = document.createElement('a');
      editLink.href = '#';
      editLink.classList.add('text-info');
      editLink.setAttribute('data-toggle', 'tooltip');
      editLink.setAttribute('title', 'Edit');
      editLink.setAttribute('data-toggle', 'modal');
      editLink.setAttribute('data-target', '#profileModal');
      const editIcon = document.createElement('i');
      editIcon.classList.add('fas', 'fa-pencil-alt');
      editLink.appendChild(editIcon);
      editLi.appendChild(editLink);
  
      const deleteLi = document.createElement('li');
      const deleteLink = document.createElement('a');
      deleteLink.href = '#';
      deleteLink.classList.add('text-danger');
      deleteLink.setAttribute('data-toggle', 'tooltip');
      deleteLink.setAttribute('title', 'Delete');
      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('far', 'fa-trash-alt');
      deleteLink.appendChild(deleteIcon);
      deleteLi.appendChild(deleteLink);
  
      actionUl.appendChild(viewLi);
      actionUl.appendChild(editLi);
      actionUl.appendChild(deleteLi);
  
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
  
      tableBody.appendChild(row);
    });
  }
  
  renderUserData();