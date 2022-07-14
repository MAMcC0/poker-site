const logout = async () => {
    const response = await fetch('/user/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  //edit with appropriate corresponding button id 
  document.querySelector('#logout').addEventListener('click', logout);