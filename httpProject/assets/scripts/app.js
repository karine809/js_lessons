const listElement = document.querySelector(".posts");
const postTempalte = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector('ul');

const postInput = document.querySelector("input");
const postText = document.querySelector('textarea')
const addBtn = document.querySelector('form button');
const closePost = document.querySelector(".post-element")
const closeX = document.querySelector(".delBtn");

//posts = [];
function sendHTTPRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const httpRq = new XMLHttpRequest();
      httpRq.open(method, url);
      httpRq.responseType = "json";
      httpRq.onload = function () { 
         //const postList = JSON.parse(httpRq.response);
        if(httpRq.status >= 200 && httpRq.status < 300){
            resolve(httpRq.response);  
        } else {
            reject(new Error('Something went wrong'));
        }
      };
      httpRq.onerror = function(){
        reject(new Error('Something went wrong'));
      }
      httpRq.send(JSON.stringify(data));//ogtagorcvum e post requesti jk
  })
  return promise;
}

async function fetchPosts () {
  try {
     const responseData = await sendHTTPRequest(
    "GET", 
    "https://jsonplaceholder.typicode.com/posts")
    const listOfPosts = responseData; 
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTempalte.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  }
  catch (err) {
      alert(err.message);
  }
} 

async function createPost(title, content) {
  const userId = Math.random();
  const post = {   //sa mer modeln e
    title: title,
    body: content,
    userId: userId
  }
  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post)
}

fetchBtn.addEventListener('click',fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  let enteredTitle = event.currentTarget.querySelector('#title').value;
  let enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
  if (
    enteredTitle.trim() === "" ||
    enteredContent.trim() === ""
  ) {
    alert("Input field is empty");
    return 
  }
    const newPost = document.createElement("li");
    newPost.classList = "post-element";
    newPost.innerHTML = `
      <div class="post-element">
      <div class="close">
      <button class="delBtn">X</button></div> 
        <h2>${enteredTitle}</h2>
        <p>${enteredContent}</p>
      </div>
      `;
    const postRoot = document.getElementById("post-list");
    postRoot.append(newPost);
    postInput.value = "";
    postText.value = "";
  // TODO : render new post on the screen
  //newPost.classList.remove("visible");
});

 const closePostHandl = () => {
     console.log("helooooo");
    
 }  
    
closeX.addEventListener('click', closePostHandl)

// postList.addEventListener('click', event => {
//   if(event.target.tagName === "BUTTON") {
//      const postId = event.target.closest('li').id;
//      sendHTTPRequest(
//        "DELETE", 
//        `https://jsonplaceholder.typicode.com/posts/${postId}`)
//   }
// })






// var arr1 = "john".split(''); console.log(arr1);
// var arr2 = arr1.reverse();console.log(arr2);
// var arr3 = "jones".split('');console.log(arr3);
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));