fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Access the fetched data here
  })
  .catch(error => {
    console.error(error); // Handle any errors
  });
