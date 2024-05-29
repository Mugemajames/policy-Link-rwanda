const passwordForm = document.getElementById('passwordForm');

passwordForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://policy-link-rwanda-client-project-with.onrender.com/account/password_validation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    });

    if (response.ok) {
      console.log('Password verified successfully');
      window.location.href = 'login.html';
    } else {
      const errorData = await response.json();
      console.error('Failed to verify password:', errorData.message || 'Unknown error', 'Status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
