const posts = [
    {title : "Post One", body : "This is post One"},
    {title : "Post Two", body : "This is post Two"}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li> ${post.title} , ${post.body} </li>`
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

createPost({title : "Post Three", body : "This is post Three"},getPosts);