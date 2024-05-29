// Function to fetch users from the API
async function fetchUsers() {
    try {
      const response = await fetch('https://policy-link-rwanda-client-project-with.onrender.com/account/view_all_users/');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
  
  // Function to render user data in the table
  function renderUserData(users) {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';
  
    users.forEach((user, index) => {
      const row = document.createElement('tr');
      row.classList.add('candidates-list');
  
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
  
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('candidate-list-option');
  
      const optionUl = document.createElement('ul');
      optionUl.classList.add('list-unstyled');
  
      const departmentLi = document.createElement('li');
      departmentLi.innerHTML = `${user.username}`;
  
      const locationLi = document.createElement('li');
      locationLi.innerHTML = `<i class="fas fa-map-marker-alt pr-1"></i>${user.email}`;
  
      optionUl.appendChild(departmentLi);
      optionUl.appendChild(locationLi);
  
      optionDiv.appendChild(optionUl);
      infoDiv.appendChild(optionDiv);
  
      detailsDiv.appendChild(infoDiv);
      titleCell.appendChild(detailsDiv);
  
      const roleCell = document.createElement('td');
      roleCell.classList.add('candidate-list-favourite-time', 'text-center');
  
      const roleSpan = document.createElement('span');
      roleSpan.classList.add('candidate-list-time', 'order-1');
      roleSpan.textContent = user.role;

      const emailSpan = document.createElement('span');
      emailSpan.classList.add('candidate-list-time', 'order-1');
      emailSpan.textContent = user.email;


      const phoneSpan = document.createElement('span');
      phoneSpan.classList.add('candidate-list-time', 'order-1');
      phoneSpan.textContent = user.phone;



  
      roleCell.appendChild(roleSpan);
  
      const actionCell = document.createElement('td');
  
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
      row.appendChild(roleCell);
      row.appendChild(actionCell);
  
      tableBody.appendChild(row);
    });
  }
  
  // Fetch users and render data
  fetchUsers()
    .then(users => {
      renderUserData(users);
    })
    .catch(error => {
      console.error('Error rendering user data:', error);
    });