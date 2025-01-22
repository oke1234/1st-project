document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy check for username and password
    const messageElement = document.getElementById('message');
    if (username === 'user' && password === 'password123') {
        messageElement.style.display = 'block';
        messageElement.textContent = 'Login successful!';
        messageElement.classList.add('success');
        messageElement.classList.remove('error');
    } else {
        messageElement.style.display = 'block';
        messageElement.textContent = 'Invalid username or password.';
        messageElement.classList.add('error');
        messageElement.classList.remove('success');
    }
});
