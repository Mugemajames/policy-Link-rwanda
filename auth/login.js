const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  };

  try {
    const response = await fetch('https://policy-link-rwanda-client-project-with.onrender.com/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('User logged in successfully');
      window.location.href = '/Otp.html';
    } else {
      // Log the response status and text to get more details about the error
      const errorData = await response.json();
      console.error('Failed to log in:', errorData.message || 'Unknown error', 'Status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
