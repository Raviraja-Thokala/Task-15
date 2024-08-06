// script.js
document.getElementById('sendOtpBtn').addEventListener('click', sendOtp);
document.getElementById('verifyOtpBtn').addEventListener('click', verifyOtp);
document.getElementById('enquiryForm').addEventListener('submit', submitForm);

function sendOtp() {
    // Simulate sending OTP to the user's phone or email
    alert('OTP has been sent to your phone/email');
    document.getElementById('otpSection').style.display = 'block';
}

function verifyOtp() {
    // Simulate OTP verification
    const otp = document.getElementById('otp').value;
    if (otp === '1234') { // Example OTP, replace with actual OTP verification logic
        alert('OTP verified successfully');
        document.getElementById('submitBtn').style.display = 'block';
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

function submitForm(event) {
    event.preventDefault();
    alert('Form submitted successfully');
    // Add logic to handle form submission, e.g., send data to server
}
