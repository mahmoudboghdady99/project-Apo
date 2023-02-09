function getPosts(){
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts")
    request.responseType = "json"
    request.send()
    request.onload = function(){
        if(request.status>=200 && request.status < 300){
          let posts = request.response
          document.querySelector(".subject-content").innerHTML =""
          for(post of posts){
            let content= `  
            <div class="subject-content">
            <h3>${post.title}</h3>
            <h4>${post.body}</h4>
        </div>

            `
        document.querySelector(".subject-content").innerHTML += content
          }

        }else{
            alert("Error")
        }
    }
}
getPosts()