function getPosts(userId){
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" +userId)
    request.responseType = "json"
    request.send()
    request.onload = function(){
        if(request.status>=200 && request.status < 300){
          let posts = request.response
          let subject = document.querySelector(".subject-content")
          subject.innerHTML =""
          for(post of posts){
            let content= `  
            <div class="subject-content">
            <h3>${post.title}</h3>
            <h4>${post.body}</h4>
        </div>

            `
            subject.innerHTML +=content
    
          }

        }else{
            alert("Error")
        }
    }
}
function getUsers(){
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function(){
        if(request.status>=200 && request.status < 300){
          let users = request.response
          let user_info = document.querySelector(".user")
          user_info.innerHTML =""
          for(user of users){
            let content= `  
            <div class="user-info" onclick="userClicked(${user.id}, this)" >
            <h3>${user.name}</h3>
            <h3>${user.email} </h3>
        </div>

            `
            user_info.innerHTML +=content
    
          }

        }else{
            alert("Error")
        }
    }
}
getPosts(1)
getUsers()

function userClicked(id, el){
  getPosts(id)

  let sellectEl=document.getElementsByClassName("sellect")
  for(element of sellectEl){
    element.classList.remove("sellect")
  }
  el.classList.add("sellect")
}