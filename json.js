function fetchData(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUser(data))

}

function displayUser(data){
    const ul = document.getElementById('createUser');
    for(const user of data){
      const li = document.createElement('li')
      li.innerText = user.name;
      ul.append(li)
    }
}










