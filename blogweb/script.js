// Array to store user data
// Array to store user details (simulate a database)
const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    
   ];
    
   function validateForm() {
    // Get form input values
    const firstName = document.querySelector('input[placeholder="First name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="New password"]').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    
    // Email validation regex
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
    
    // Simple validations
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      day === '' ||
      month === '' ||
      year === '' ||
      !gender
    ) {
      alert('Please fill in all fields and select a gender.');
      return false; // Prevent form submission
    }
    
    // Additional email validation
    if (!emailRegex.test(email)) {
      alert('Invalid email address.');
      return false; // Prevent form submission
    }
    
    // Store user data in an array
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthdate: `${year}-${month}-${day}`,
      gender: gender.value
    };
    
    users.push(user); // Add the new user to the array
    
    alert('Registered successfully');
    console.log('Users:', users); // Log the array of users (for testing purposes)
    
    return true; // Allow form submission
   }
    
    
   function validateSignIn() {
    // Get form input values
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    
    // Simple validations
    if (
      email === '' || password === ''
    ) {
      alert('Please enter the email and password.');
      return false; // Prevent form submission
    }
    
    // Check if the user exists in the users array
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        alert('Login successful');
        // Redirect to home.html or perform any other action
        window.location.href('home.html');
        return true;
    } else {
        alert('Invalid email or password. Please try again.');
        return false; // Prevent form submission
    }
   }
    