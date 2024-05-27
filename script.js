// Dummy data for institutions and departments
const institutions = {
    university: ['Harvard University', 'MIT', 'Stanford University'],
    college: ['Amherst College', 'Williams College', 'Swarthmore College'],
    school: ['Stuyvesant High School', 'Bronx High School of Science', 'Brooklyn Technical High School']
  };
  
  const departments = {
    'Harvard University': ['Computer Science', 'Mathematics', 'Biology'],
    'MIT': ['Electrical Engineering', 'Aerospace Engineering', 'Physics'],
    'Stanford University': ['Computer Science', 'Mechanical Engineering', 'Chemistry'],
    'Amherst College': ['English', 'History', 'Economics'],
    'Williams College': ['Psychology', 'Sociology', 'Art History'],
    'Swarthmore College': ['Political Science', 'Philosophy', 'Theater'],
    'Stuyvesant High School': ['Mathematics', 'Science', 'English'],
    'Bronx High School of Science': ['Computer Science', 'Biology', 'Chemistry'],
    'Brooklyn Technical High School': ['Engineering', 'Architecture', 'Design']
  };
  
  // Get references to the dropdown elements
  const institutionTypeDropdown = document.getElementById('institution-type');
  const institutionNameDropdown = document.getElementById('institution-name');
  const departmentDropdown = document.getElementById('department');
  const policyCardContainer = document.getElementById('policy-card-container'); // Add this line
  
  // Add event listener to the institution type dropdown
  institutionTypeDropdown.addEventListener('change', () => {
    const selectedType = institutionTypeDropdown.value;
    populateInstitutionDropdown(selectedType);
    departmentDropdown.disabled = true;
    departmentDropdown.innerHTML = '<option value="">Select Department</option>';
    policyCardContainer.innerHTML = ''; // Clear the policy card container
  });
  
  // Add event listener to the institution name dropdown
  institutionNameDropdown.addEventListener('change', () => {
    const selectedInstitution = institutionNameDropdown.value;
    populateDepartmentDropdown(selectedInstitution);
    policyCardContainer.innerHTML = ''; // Clear the policy card container
  });
  
  // Add event listener to the department dropdown
  departmentDropdown.addEventListener('change', () => {
    const selectedDepartment = departmentDropdown.value;
    displayPolicyCard(selectedDepartment);
  });
  
  // Function to populate the institution name dropdown based on the selected type
  function populateInstitutionDropdown(type) {
    institutionNameDropdown.innerHTML = '<option value="">Select Institution</option>';
    institutionNameDropdown.disabled = !type;
  
    if (type) {
      const institutionNames = institutions[type];
      institutionNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        institutionNameDropdown.appendChild(option);
      });
    }
  }
  
  // Function to populate the department dropdown based on the selected institution
  function populateDepartmentDropdown(institution) {
    departmentDropdown.innerHTML = '<option value="">Select Department</option>';
    departmentDropdown.disabled = !institution;
  
    if (institution) {
      const departmentNames = departments[institution];
      departmentNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        departmentDropdown.appendChild(option);
      });
    }
  }
  
  // Function to display the policy card for the selected department
  function displayPolicyCard(department) {
    if (department) {
      const policyCard = document.createElement('div');
      policyCard.classList.add('policy-card');
      policyCard.textContent = `Policy for ${department} department`;
      policyCardContainer.appendChild(policyCard);
    } else {
      policyCardContainer.innerHTML = '';
    }
  }