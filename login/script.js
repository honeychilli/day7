// Get the forms
const loginForm = document.getElementById('login-form');

// Get the input fields
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add event listeners to the forms
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  // Call the login function
  login(username, password);
});



// Login function
function login(username, password) {
  // TO DO: Implement login logic here
  console.log(`Logging in with username: ${username} and password: ${password}`);
}

