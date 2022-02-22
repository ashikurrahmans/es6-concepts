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

function posts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => displayPost(posts))

}
posts()
function displayPost(posts){
   const containers = document.getElementById("posts")
    for(const post of posts){
        const createDiv = document.createElement('div')
        createDiv.classList.add('post')
        createDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `
        containers.appendChild(createDiv);
        console.log(post);
 
    }
}





function displayUser(data){
    const ul = document.getElementById('createUser');
    for(const user of data){
      const li = document.createElement('li')
      li.innerText = user.name;
      ul.append(li)
    }
}










