function verifyOTP() {
    const otp1 = document.getElementById('otp1').value;
    const otp2 = document.getElementById('otp2').value;
    const otp3 = document.getElementById('otp3').value;
    const otp4 = document.getElementById('otp4').value;
    const otp5 = document.getElementById('otp5').value;
  
    const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}`;
  
    if (otp.length === 5) {
      const url = 'https://policy-link-rwanda-client-project-with.onrender.com/account/login/otp_verification/';
      const data = { otp };
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.ok) {
            // OTP verification successful, redirect to login.html
            window.location.href = 'login.html';
          } else {
            // OTP verification failed
            alert('Invalid OTP. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        });
    } else {
      alert('Please enter a valid 5-digit OTP.');
    }
  }
  
  // Handle input field changes
  const otpInputs = document.querySelectorAll('.otp-input input');
  otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      const nextInput = otpInputs[index + 1];
      if (input.value && nextInput) {
        nextInput.focus();
      }
    });
  });