const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vanGogh.png",
        post: "images/vangogh.png",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-Courbet.png",
        post: "images/courbet.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-Ducreux.png",
        post: "images/ducreux.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainEl = document.getElementById("main-el")

//generating the posts
function generate(){
    let ans= ""
    for (i=0;i<posts.length; i++){
        ans+=`
        <section class="container">
                    <div class="avatar-info">
                        <img class="avatar-pfp" src="${posts[i].avatar}" alt="${posts[i].name} profile picture."/>
                        <div class="avatar-info-container">
                            <h1 class="bold display-name">${posts[i].name}</h1>
                            <p class="location">${posts[i].location}</p>
                        </div>
                    </div>

                    <img class="post" src="${posts[i].post}" alt="${posts[i].name} post."/>
                    <div class="btns">
                        <img id="like${i}" class="btn" src="images/like.png" alt="like icon."/>
                        <img class="btn" src="images/comment.png" alt="comment icon."/>
                        <img class="btn" src="images/share.png" alt="share icon."/>
                    </div>

                    <p  id= "likes-counter${i}"class="bold likes">${posts[i].likes} likes</p>
                    <p class="about"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
                </section>
        `
    }
    mainEl.innerHTML+= ans
}

generate()

//like farming
const like0 = document.getElementById("like0")
const like1 = document.getElementById("like1")
const like2 = document.getElementById("like2")

const likeCounter0 = document.getElementById("likes-counter0")
const likeCounter1 = document.getElementById("likes-counter1")
const likeCounter2 = document.getElementById("likes-counter2")

like0.addEventListener("click", function(){
    posts[0].likes++
    likeCounter0.textContent = posts[0].likes +" likes"
 })

 like1.addEventListener("click", function(){
    posts[1].likes++
    likeCounter1.textContent = posts[1].likes +" likes"
 })

 like2.addEventListener("click", function(){
    posts[2].likes++
    likeCounter2.textContent = posts[2].likes +" likes"
 })

