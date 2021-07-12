var images = ['https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
              'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
              'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'];
let i = 0;
function slideshow() {
    document.getElementById("image").src=images[i];
    if( i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideshow()", 5000);
}
slideshow();

document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
})
