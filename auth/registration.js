const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    username: document.getElementById('username').value
  };

  try {
    const response = await fetch('https://policy-link-rwanda-client-project-with.onrender.com/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('User registered successfully');
      window.location.href = '/LoginForm';
    } else {
      console.error('Failed to register user');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});