const institutions = {
  public: [
      {
        name: "Public University A",
        departments: [
          {
            name: "Information Technology",
            policies: [
              {
                name: "Acceptable Use Policy",
                description: "This outlines the rules and guidelines for the acceptable use of IT resources, including the appropriate use of hardware, software, internet access, email, social media, and other technology-related assets.",
                rate: 4
              },
              {
                name: "Data Protection Policy",
                description: "This focuses on protecting sensitive data, including personal information, financial data, intellectual property, and other confidential information, by outlining the measures and procedures for data classification, access controls, encryption, backup, and disaster recovery.",
                rate: 5
              }
            ]
          },
          {
            name: "Finance",
            policies: [
              {
                name: "Finance Policy 1",
                description: "Description of Finance Policy 1",
                rate: 3
              },
              {
                name: "Finance Policy 2",
                description: "Description of Finance Policy 2",
                rate: 4
              }
            ]
          }
        ]
      }
    ],
    private: [
      {
        name: "Private University B",
        departments: [
          {
            name: "Information Technology",
            policies: [
              {
                name: "IT Policy 1",
                description: "Description of IT Policy 1",
                rate: 4
              },
              {
                name: "IT Policy 2",
                description: "Description of IT Policy 2",
                rate: 5
              }
            ]
          },
          {
            name: "Finance",
            policies: [
              {
                name: "Finance Policy 1",
                description: "Description of Finance Policy 1",
                rate: 3
              },
              {
                name: "Finance Policy 2",
                description: "Description of Finance Policy 2",
                rate: 4
              }
            ]
          }
        ]
      }
    ]
  };
let currentPage = 1;
const itemsPerPage = 5;

function populateInstitutionSelect() {
  // ... (same as before)
  const institutionSelect = document.getElementById("institution-select");
const institutionTypes = ["public", "private"];

institutionTypes.forEach(type => {
  const optGroup = document.createElement("optgroup");
  optGroup.label = type.charAt(0).toUpperCase() + type.slice(1) + " Institutions";

  institutions[type].forEach(institution => {
    const option = document.createElement("option");
    option.value = `${type}-${institution.name}`;
    option.text = institution.name;
    optGroup.appendChild(option);
  });

  institutionSelect.appendChild(optGroup);
});

}

function populateDepartmentSelect(institutionType, institutionName) {
  // ... (same as before)

  const departmentSelect = document.getElementById("department-select");
departmentSelect.innerHTML = "";

const selectedInstitution = institutions[institutionType].find(
  institution => institution.name === institutionName
);

if (selectedInstitution) {
  selectedInstitution.departments.forEach(department => {
    const option = document.createElement("option");
    option.value = department.name;
    option.text = department.name;
    departmentSelect.appendChild(option);
  });
}
}

function populatePolicyList(institutionType, institutionName, departmentName) {
  const policyList = document.getElementById("policy-list");
  policyList.innerHTML = "";

  const selectedInstitution = institutions[institutionType].find(
    institution => institution.name === institutionName
  );

  if (selectedInstitution) {
    const selectedDepartment = selectedInstitution.departments.find(
      department => department.name === departmentName
    );

    if (selectedDepartment) {
      const policies = selectedDepartment.policies;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedPolicies = policies.slice(startIndex, endIndex);

      paginatedPolicies.forEach(policy => {
        const policyItem = document.createElement("div");
        policyItem.classList.add("policy-content");

        const institutionInfo = document.createElement("div");
        institutionInfo.classList.add("institution-info");
        institutionInfo.textContent = `${selectedInstitution.name} - ${selectedDepartment.name}`;

        const policyName = document.createElement("h3");
        policyName.textContent = policy.name;

        const policyDescription = document.createElement("p");
        policyDescription.textContent = policy.description;

        const policyRating = document.createElement("div");
        policyRating.classList.add("star-icons");

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("svg");
          star.setAttribute("viewBox", "0 0 24 24");
          star.setAttribute("width", "24");
          star.setAttribute("height", "24");
          star.classList.add(i < policy.rate ? "filled" : "empty");

          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute(
            "d",
            "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          );
          path.setAttribute("fill", i < policy.rate ? "#ffc107" : "#ccc");

          star.appendChild(path);
          policyRating.appendChild(star);
        }

        policyItem.appendChild(institutionInfo);
        policyItem.appendChild(policyName);
        policyItem.appendChild(policyDescription);
        policyItem.appendChild(policyRating);
        policyList.appendChild(policyItem);
      });

      renderPagination(policies.length);
    }
  }
}

function renderPagination(totalItems) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = i;
    button.onclick = () => {
      currentPage = i;
      handleDepartmentChange();
    };

    if (i === currentPage) {
      button.classList.add("active");
    }

    pageButton.appendChild(button);
    paginationContainer.appendChild(pageButton);
  }
}

function handleInstitutionChange() {
  // ... (same as before)
const institutionSelect = document.getElementById("institution-select");
const selectedOption = institutionSelect.value.split("-");
const institutionType = selectedOption[0];
const institutionName = selectedOption[1];

populateDepartmentSelect(institutionType, institutionName);
populatePolicyList(institutionType, institutionName, null);
}

function handleDepartmentChange() {
  const institutionSelect = document.getElementById("institution-select");
  const selectedOption = institutionSelect.value.split("-");
  const institutionType = selectedOption[0];
  const institutionName = selectedOption[1];

  const departmentSelect = document.getElementById("department-select");
  const departmentName = departmentSelect.value;

  populatePolicyList(institutionType, institutionName, departmentName);
}

populateInstitutionSelect();