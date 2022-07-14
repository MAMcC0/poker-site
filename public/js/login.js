const loginForm = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();

    if (email && password && username) {
      const response = await fetch('/user/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        console.log(response)
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signUpForm = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const user_name = document.querySelector('#username-signup').value.trim();
    
    if (name && email && password && user_name) {
      const response = await fetch('/user/users/newuser', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, user_name }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        console.log(response)
        // document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginForm);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpForm);
  